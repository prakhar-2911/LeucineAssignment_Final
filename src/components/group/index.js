import React from 'react';
import styled from 'styled-components';
import Input from '../input';
// import Dropdown from '../dropdown'
import Button from '../button';
import RadioGroup from '../radio-group';
import Radio from '../radio';
import { FastField, Field } from 'formik';
import Dropdown from '../dropdown';

const Flexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const Card = styled(Flexbox)`
  padding: 1rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  border-radius: 4px;
`;

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.buttons.map(button => !button),
      radio: null,
      openMOC: false,
      controls: [],
      addAnotherMOCToggle: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleMOC = this.handleMOC.bind(this);
    this.handleAddAnotherMOC = this.handleAddAnotherMOC.bind(this);
  }

  handleClick(id) {
    this.setState({
      open: this.state.open.map((item, index) => (index === id ? !item : item))
    });
  }

  handleMOC(e) {
    this.setState({ openMOC: true });
  }

  toggle(e) {
    this.setState({
      radio: e.target.value
    });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.values.target_residue_type !==
      prevProps.values.target_residue_type
    ) {
      this.setState({
        radio: null
      });
    }
  }

  handleAddAnotherMOC(){
  this.setState({addAnotherMOCToggle: false})
   let controlsCopy = [...this.state.controls]; 
    controlsCopy.push(<Card>
      
      <Field label="Select MOC" component={Dropdown}
      options= {[
        {
          value: 'stainlessSteel',
          label: 'Stainless Steel'
        },
        {
          value: 'glass',
          label: 'Glass'
        },
        {
          value: 'teflon',
          label: 'Teflon'
        },
        {
          value: 'plastic',
          label: 'Plastic'
        }]}></Field>
       
       
      <Field component={Input} label="Recovery" name={`Input ${controlsCopy.length}`}></Field>
      </Card>
      );
    this.setState({controls: controlsCopy});    
  };
  

  render() {

    const { touched, errors } = this.props;
    return (
      <Flexbox>
        {this.props.fields.map(field => {
          if (field.type === 'radio') {
            return (
              <RadioGroup
                fluid={field.fluid}
                key={field.name}
                label={field.label}
                error={touched[field.name] && errors[field.name]}
              >
                {field.options.map(option => (
                  <FastField
                    component={Radio}
                    key={option.id}
                    id={option.id}
                    label={option.label}
                    name={field.name}
                    handleClick={this.toggle}
                  />
                ))}
              </RadioGroup>
            );
          }

          return (
            <FastField
              component={Input}
              key={field.name}
              name={field.name}
              {...field}
            />
          );
        })}

        {this.state.radio === 'yes' && (
          <Flexbox>
            {this.props.radioSection.fields.map(field => {
              if (field.type === 'radio') {
                return (
                  <RadioGroup
                    fluid={field.fluid}
                    key={field.name}
                    label={field.label}
                    error={touched[field.name] && errors[field.name]}
                  >
                    {field.options.map(option => (
                      <FastField
                        component={Radio}
                        key={option.id}
                        id={option.id}
                        label={option.label}
                        name={field.name}
                      />
                    ))}
                  </RadioGroup>
                );
              }

              return (
                <FastField
                  component={Input}
                  key={field.name}
                  name={field.name}
                  {...field}
                />
              );
            })}
          </Flexbox>
        )}

        {this.props.buttons && (
          <Flexbox>
            {this.props.buttons.map((button, index) => (
              <React.Fragment key={button.name}>
                <Button
                  primary={this.state.open[index]}
                  type="button"
                  onClick={() => this.handleClick(index)}
                >
                  {this.state.open[index]
                    ? button.button.close
                    : button.button.open}
                </Button>
                {this.state.open[index] && (
                  <Card>
                    {button.fields.map(field => {
                      if (field.type === 'radio') {
                        return (
                          <RadioGroup
                            fluid={field.fluid}
                            key={field.name}
                            label={field.label}
                            error={touched[field.name] && errors[field.name]}
                          >
                            {field.options.map(option => (
                              <FastField
                                component={Radio}
                                key={option.id}
                                id={option.id}
                                label={option.label}
                                name={field.name}
                              />
                            ))}
                          </RadioGroup>
                        );
                      }

                      return (
                        <FastField
                          component={Input}
                          key={field.name}
                          name={field.name}
                          {...field}
                        />
                      );
                    })}

                    {this.state.openMOC || (
                      <Button
                        type="button"
                        onClick={event => this.handleMOC(event)}
                      >
                        ADD MOC
                      </Button>
                    )}

                    {this.state.openMOC && (
                      <Card>
                        {button.MOCButton.fields.map(field => {
                          if (field.type === 'dropdown') {
                            return (
                              <Field
                                component={Dropdown}
                                key={field.name}
                                {...field}
                                handleDropdown={this.handleMOC}
                              />
                            );
                          }
                          return (
                            <FastField
                              component={Input}
                              key={field.name}
                              {...field}
                              name={field.name}
                            />
                          );
                        })}
                        
                        {
                          this.state.addAnotherMOCToggle || (
                            <Flexbox>
                              {
                                this.state.controls.map(item => {
                                  return item
                                })
                              }
                            </Flexbox>
                          )
                        
                        }
                        
                        {
                        <Flexbox style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
                          <Button style={{ width: '45%' }} type="button" onClick={this.handleAddAnotherMOC}> Add Another</Button>
                          <span>OR</span>
                          <Button style={{ width: '45%' }} type="button">Create a New MOC</Button>
                        </Flexbox>
                        }
                      </Card>
                    )}
                  </Card>
                )}
              </React.Fragment>
            ))}
          </Flexbox>
        )}
      </Flexbox>
    );
  }
}

export default Group;
