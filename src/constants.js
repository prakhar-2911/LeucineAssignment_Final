import * as yup from 'yup';

const MOC = {
  open: null,
  close: 'ADD MOC',
  fields:[
    {
      name: 'selectMOC',
      type: 'dropdown',
      label: 'Select MOC',
      options: [
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
        }
      ]
    },
    {
      name:'recovery',
      label: ' Recovery (%)'
    }
  ]
}

export default {
  initialValues: {
    analytical_method_id: '',
    target_residue_type: '',
    reason: '',
  },
  validationSchema: yup.object().shape({
    analytical_method_id: yup.string().min(3, 'Min 3 characters').required('This is required'),
    target_residue_type: yup.string().required('This is required'),
    reason: yup.string().required('This is required'),
    // 'api-lod': yup.number().min(0, 'Should be positive').required('This is required')
  }),
  sections: [
    {
      fields: [
        {
          name: 'analytical_method_id',
          label: 'Analytical Method ID',
          fluid: true,
        },
        {
          name: 'target_residue_type',
          type: 'dropdown',
          label: 'Target Residue Type',
          options: [
            {
              value: 'api',
              label: 'API'
            },
            {
              value: 'cleaning-agent',
              label: 'Cleaning Agent'
            },
            {
              value: 'bioburden',
              label: 'Bioburden'
            },
            {
              value: 'endotoxin',
              label: 'Endotoxin'
            }
          ]
        }
      ]
    },
    {
      fields: [
        {
          name: 'reason',
          label: 'Reason',
          fluid: true
        }
      ]
    }
  ],
  customSection: {
    api: {
      fields: [
        {
          name: 'api-lod',
          label: 'LOD (in ppm)',
          inputType: 'number',
          min: '0',
        },
        {
          name: 'api-loq',
          label: 'LOQ (in ppm)',
          inputType: 'number',
          min: '0',
        }
      ],
      buttons: [
        {
          name: 'swab',
          button: {
            open: 'Configure Swab Sampling Parameters',
            close: 'Remove Swab Sampling Parameters'
          },
          fields: [
            {
              name: 'api-swab-method',
              label: 'Method Used',
              fluid: true
            },
            {
              name: 'api-swab-solvent-name',
              label: 'Solvent Name'
            },
            {
              name: 'api-swab-solvent-quality',
              label: 'Solvent Quality',
              inputType: 'number',
              min: '0',
            },
            {
              name: 'api-swab-default-recovery',
              label: 'Default Recovery',
              inputType: 'number',
              min: '0',
              fluid: true
            }
          ],
          MOCButton: MOC,
        },
        {
          name: 'rinse',
          button: {
            open: 'Configure Rinse Sampling Parameters',
            close: 'Remove Rinse Sampling Parameters'
          },
          fields: [
            {
              name: 'api-rinse-method',
              label: 'Method Used',
              fluid: true
            },
            {
              name: 'api-rinse-default-recovery',
              label: 'Default Recovery (%)',
              inputType: 'number',
              min: '0',
              fluid: true,
            }
          ],
          MOCButton: MOC,
        }
      ]
    },
    'cleaning-agent': {
      fields: [
        {
          name: 'cleaning-agent-lod',
          label: 'LOD (in ppm)',
          inputType: 'number',
          min: '0',
        },
        {
          name: 'cleaning-agent-loq',
          label: 'LOQ (in ppm)',
          inputType: 'number',
          min: '0',
        }
      ],
      buttons: [
        {
          name: 'swab',
          button: {
            open: 'Configure Swab Sampling Parameters',
            close: 'Remove Swab Sampling Parameters'
          },
          fields: [
            {
              name: 'cleaning-agent-swab-method',
              label: 'Method Used',
              fluid: true
            },
            {
              name: 'cleaning-agent-swab-solvent-name',
              label: 'Solvent Name'
            },
            {
              name: 'cleaning-agent-swab-solvent-quality',
              label: 'Solvent Quality',
              inputType: 'number',
              min: '0',
            },
            {
              name: 'cleaning-agent-swab-default-recovery',
              label: 'Default Recovery',
              inputType: 'number',
              min: '0',
              fluid: true
            }
          ],
          MOCButton: MOC,
        },
        {
          name: 'rinse',
          button: {
            open: 'Configure Rinse Sampling Parameters',
            close: 'Remove Rinse Sampling Parameters'
          },
          fields: [
            {
              name: 'cleaning-agent-rinse-method',
              label: 'Method Used',
              fluid: true,
            },
            {
              name: 'cleaning-agent-rinse-default-recovery',
              label: 'Default Recovery',
              inputType: 'number',
              min: '0',
              fluid: true,
            }
          ],
          MOCButton: MOC,
        }
      ]
    },
    bioburden: {
      fields: [
        {
          name: 'bioburden-method',
          label: 'Method Used',
          fluid: true
        },
        {
          name: 'bioburden-limit',
          label: 'Define TNTC and TFTC Limits',
          fluid: true,
          options: [
            {
              label: 'Yes',
              id: 'yes'
            },
            {
              label: 'No',
              id: 'no'
            }
          ],
          type: 'radio'
        }
      ],
      radioSection: {
        fields: [
          {
            name: 'bioburden-tntc',
            label: 'TNTC Limit (in CFU)',
            inputType: 'number',
            min: '0',
          },
          {
            name: 'bioburden-tftc',
            label: 'TFTC Limit (in CFU)',
            inputType: 'number',
            min: '0',
          }
        ]
      },
      buttons: [
        {
          name: 'swab',
          button: {
            open: 'Configure Swab Sampling Parameters',
            close: 'Remove Swab Sampling Parameters'
          },
          fields: [
            {
              name: 'bioburden-swab-use-recovery',
              label: 'Use Recovery for Swap?',
              options: [
                {
                  label: 'Yes',
                  id: 'yes'
                },
                {
                  label: 'No',
                  id: 'no'
                }
              ],
              type: 'radio'
            },
            {
              name: 'bioburden-swab-recovery-percentage',
              label: 'Default Recovery (%)'
            }
          ],
          MOCButton: MOC,
        },
        {
          name: 'rinse',
          button: {
            open: 'Configure Rinse Sampling Parameters',
            close: 'Remove Rinse Sampling Parameters'
          },
          fields: [
            {
              name: 'bioburden-rinse-solvent-volume',
              label: 'Solvent Volume',
              inputType: 'number',
              min: '0',
              fluid: true
            },
            {
              name: 'bioburden-rinse-use-recovery',
              label: 'Use Recovery for Swap?',
              options: [
                {
                  label: 'Yes',
                  id: 'yes'
                },
                {
                  label: 'No',
                  id: 'no'
                }
              ],
              type: 'radio'
            },
            {
              name: 'bioburden-rinse-recovery-percentage',
              label: 'Default Recovery (%)',
              inputType: 'number',
              min: '0',
            }
          ],
          MOCButton: MOC,
        }
      ]
    },
    endotoxin: {
      fields: [
        {
          name: 'endotoxin-method',
          label: 'Method Used',
          fluid: true
        },
        {
          name: 'endotoxin-limit',
          label: 'Define TNTC and TFTC Limits',
          fluid: true,
          options: [
            {
              label: 'Yes',
              id: 'yes'
            },
            {
              label: 'No',
              id: 'no'
            }
          ],
          type: 'radio'
        }
      ],
      radioSection: {
        fields: [
          {
            name: 'endotoxin-tntc',
            label: 'TNTC Limit (in CFU)',
            inputType: 'number',
            min: '0',
          },
          {
            name: 'endotoxin-tftc',
            label: 'TFTC Limit (in CFU)',
            inputType: 'number',
            min: '0',
          }
        ]
      },
      buttons: [
        {
          name: 'swab',
          button: {
            open: 'Configure Swab Sampling Parameters',
            close: 'Remove Swab Sampling Parameters'
          },
          fields: [
            {
              name: 'endotoxin-swab-use-recovery',
              label: 'Use Recovery for Swap?',
              options: [
                {
                  label: 'Yes',
                  id: 'yes'
                },
                {
                  label: 'No',
                  id: 'no'
                }
              ],
              type: 'radio'
            },
            {
              name: 'endotoxin-swab-recovery-percentage',
              label: 'Default Recovery (%)',
              inputType: 'number',
              min: '0',
            }
          ],
          MOCButton: MOC,
        },
        {
          name: 'rinse',
          button: {
            open: 'Configure Rinse Sampling Parameters',
            close: 'Remove Rinse Sampling Parameters'
          },
          fields: [
            {
              name: 'endotoxin-rinse-solvent-volume',
              label: 'Solvent Volume',
              inputType: 'number',
              min: '0',
              fluid: true
            },
            {
              name: 'endotoxin-rinse-use-recovery',
              label: 'Use Recovery for Swap?',
              options: [
                {
                  label: 'Yes',
                  id: 'yes'
                },
                {
                  label: 'No',
                  id: 'no'
                }
              ],
              type: 'radio'
            },
            {
              name: 'endotoxin-rinse-recovery-percentage',
              label: 'Default Recovery (%)',
              inputType: 'number',
              min: '0',
            }
          ],
          MOCButton: MOC,
        }
      ]
    }
  }
};
