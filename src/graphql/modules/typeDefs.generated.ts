import type { DocumentNode } from 'graphql'
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Auth', loc: { start: 6, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'token', loc: { start: 15, end: 20 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 22, end: 28 }
              },
              loc: { start: 22, end: 28 }
            },
            loc: { start: 22, end: 29 }
          },
          directives: [],
          loc: { start: 15, end: 29 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'userId', loc: { start: 32, end: 38 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 40, end: 46 }
              },
              loc: { start: 40, end: 46 }
            },
            loc: { start: 40, end: 47 }
          },
          directives: [],
          loc: { start: 32, end: 47 }
        }
      ],
      loc: { start: 1, end: 49 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 56, end: 61 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'getUserByToken',
            loc: { start: 66, end: 80 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'token',
                loc: { start: 81, end: 86 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 88, end: 94 }
                  },
                  loc: { start: 88, end: 94 }
                },
                loc: { start: 88, end: 95 }
              },
              directives: [],
              loc: { start: 81, end: 95 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 98, end: 102 }
              },
              loc: { start: 98, end: 102 }
            },
            loc: { start: 98, end: 103 }
          },
          directives: [],
          loc: { start: 66, end: 103 }
        }
      ],
      loc: { start: 51, end: 105 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 112, end: 120 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'login', loc: { start: 125, end: 130 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'email',
                loc: { start: 131, end: 136 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 138, end: 144 }
                  },
                  loc: { start: 138, end: 144 }
                },
                loc: { start: 138, end: 145 }
              },
              directives: [],
              loc: { start: 131, end: 145 }
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'password',
                loc: { start: 147, end: 155 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 157, end: 163 }
                  },
                  loc: { start: 157, end: 163 }
                },
                loc: { start: 157, end: 164 }
              },
              directives: [],
              loc: { start: 147, end: 164 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 167, end: 173 }
              },
              loc: { start: 167, end: 173 }
            },
            loc: { start: 167, end: 174 }
          },
          directives: [],
          loc: { start: 125, end: 174 }
        }
      ],
      loc: { start: 107, end: 176 }
    },
    {
      kind: 'DirectiveDefinition',
      name: { kind: 'Name', value: 'auth', loc: { start: 188, end: 192 } },
      arguments: [],
      repeatable: false,
      locations: [
        {
          kind: 'Name',
          value: 'FIELD_DEFINITION',
          loc: { start: 196, end: 212 }
        }
      ],
      loc: { start: 177, end: 212 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Help', loc: { start: 218, end: 222 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 227, end: 229 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 231, end: 233 }
              },
              loc: { start: 231, end: 233 }
            },
            loc: { start: 231, end: 234 }
          },
          directives: [],
          loc: { start: 227, end: 234 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'description',
            loc: { start: 237, end: 248 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 250, end: 256 }
              },
              loc: { start: 250, end: 256 }
            },
            loc: { start: 250, end: 257 }
          },
          directives: [],
          loc: { start: 237, end: 257 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'title', loc: { start: 260, end: 265 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 267, end: 273 }
              },
              loc: { start: 267, end: 273 }
            },
            loc: { start: 267, end: 274 }
          },
          directives: [],
          loc: { start: 260, end: 274 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'status',
            loc: { start: 277, end: 283 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 285, end: 288 }
              },
              loc: { start: 285, end: 288 }
            },
            loc: { start: 285, end: 289 }
          },
          directives: [],
          loc: { start: 277, end: 289 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 292, end: 301 }
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 303, end: 309 }
            },
            loc: { start: 303, end: 309 }
          },
          directives: [],
          loc: { start: 292, end: 309 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'updatedAt',
            loc: { start: 312, end: 321 }
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 323, end: 329 }
            },
            loc: { start: 323, end: 329 }
          },
          directives: [],
          loc: { start: 312, end: 329 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'deletedAt',
            loc: { start: 332, end: 341 }
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 343, end: 349 }
            },
            loc: { start: 343, end: 349 }
          },
          directives: [],
          loc: { start: 332, end: 349 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userCreated',
            loc: { start: 352, end: 363 }
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 365, end: 369 }
            },
            loc: { start: 365, end: 369 }
          },
          directives: [],
          loc: { start: 352, end: 369 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userUpdated',
            loc: { start: 372, end: 383 }
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 385, end: 389 }
            },
            loc: { start: 385, end: 389 }
          },
          directives: [],
          loc: { start: 372, end: 389 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'userDeleted',
            loc: { start: 392, end: 403 }
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 405, end: 409 }
            },
            loc: { start: 405, end: 409 }
          },
          directives: [],
          loc: { start: 392, end: 409 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user', loc: { start: 412, end: 416 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 418, end: 422 }
              },
              loc: { start: 418, end: 422 }
            },
            loc: { start: 418, end: 423 }
          },
          directives: [],
          loc: { start: 412, end: 423 }
        }
      ],
      loc: { start: 213, end: 425 }
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: { kind: 'Name', value: 'HelpInput', loc: { start: 433, end: 442 } },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'description',
            loc: { start: 447, end: 458 }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 460, end: 466 }
              },
              loc: { start: 460, end: 466 }
            },
            loc: { start: 460, end: 467 }
          },
          directives: [],
          loc: { start: 447, end: 467 }
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'title', loc: { start: 470, end: 475 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 477, end: 483 }
              },
              loc: { start: 477, end: 483 }
            },
            loc: { start: 477, end: 484 }
          },
          directives: [],
          loc: { start: 470, end: 484 }
        }
      ],
      loc: { start: 427, end: 486 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 493, end: 498 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'GetAllHelps',
            loc: { start: 503, end: 514 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Help',
                    loc: { start: 517, end: 521 }
                  },
                  loc: { start: 517, end: 521 }
                },
                loc: { start: 517, end: 522 }
              },
              loc: { start: 516, end: 523 }
            },
            loc: { start: 516, end: 524 }
          },
          directives: [
            {
              kind: 'Directive',
              name: {
                kind: 'Name',
                value: 'auth',
                loc: { start: 526, end: 530 }
              },
              arguments: [],
              loc: { start: 525, end: 530 }
            }
          ],
          loc: { start: 503, end: 530 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'GetHelp',
            loc: { start: 533, end: 540 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 541, end: 543 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 545, end: 547 }
                  },
                  loc: { start: 545, end: 547 }
                },
                loc: { start: 545, end: 548 }
              },
              directives: [],
              loc: { start: 541, end: 548 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Help',
                loc: { start: 551, end: 555 }
              },
              loc: { start: 551, end: 555 }
            },
            loc: { start: 551, end: 556 }
          },
          directives: [
            {
              kind: 'Directive',
              name: {
                kind: 'Name',
                value: 'auth',
                loc: { start: 558, end: 562 }
              },
              arguments: [],
              loc: { start: 557, end: 562 }
            }
          ],
          loc: { start: 533, end: 562 }
        }
      ],
      loc: { start: 488, end: 564 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 571, end: 579 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createHelp',
            loc: { start: 584, end: 594 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'data',
                loc: { start: 595, end: 599 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'HelpInput',
                    loc: { start: 601, end: 610 }
                  },
                  loc: { start: 601, end: 610 }
                },
                loc: { start: 601, end: 611 }
              },
              directives: [],
              loc: { start: 595, end: 611 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 614, end: 621 }
              },
              loc: { start: 614, end: 621 }
            },
            loc: { start: 614, end: 622 }
          },
          directives: [
            {
              kind: 'Directive',
              name: {
                kind: 'Name',
                value: 'auth',
                loc: { start: 624, end: 628 }
              },
              arguments: [],
              loc: { start: 623, end: 628 }
            }
          ],
          loc: { start: 584, end: 628 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'editHelp',
            loc: { start: 631, end: 639 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'data',
                loc: { start: 640, end: 644 }
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'HelpInput',
                  loc: { start: 646, end: 655 }
                },
                loc: { start: 646, end: 655 }
              },
              directives: [],
              loc: { start: 640, end: 655 }
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 657, end: 659 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 661, end: 663 }
                  },
                  loc: { start: 661, end: 663 }
                },
                loc: { start: 661, end: 664 }
              },
              directives: [],
              loc: { start: 657, end: 664 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 667, end: 674 }
              },
              loc: { start: 667, end: 674 }
            },
            loc: { start: 667, end: 675 }
          },
          directives: [
            {
              kind: 'Directive',
              name: {
                kind: 'Name',
                value: 'auth',
                loc: { start: 677, end: 681 }
              },
              arguments: [],
              loc: { start: 676, end: 681 }
            }
          ],
          loc: { start: 631, end: 681 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'initAtendimento',
            loc: { start: 684, end: 699 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 700, end: 702 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 704, end: 706 }
                  },
                  loc: { start: 704, end: 706 }
                },
                loc: { start: 704, end: 707 }
              },
              directives: [],
              loc: { start: 700, end: 707 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 710, end: 717 }
              },
              loc: { start: 710, end: 717 }
            },
            loc: { start: 710, end: 718 }
          },
          directives: [
            {
              kind: 'Directive',
              name: {
                kind: 'Name',
                value: 'auth',
                loc: { start: 720, end: 724 }
              },
              arguments: [],
              loc: { start: 719, end: 724 }
            }
          ],
          loc: { start: 684, end: 724 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'closeHelp',
            loc: { start: 727, end: 736 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 737, end: 739 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 741, end: 743 }
                  },
                  loc: { start: 741, end: 743 }
                },
                loc: { start: 741, end: 744 }
              },
              directives: [],
              loc: { start: 737, end: 744 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 747, end: 754 }
              },
              loc: { start: 747, end: 754 }
            },
            loc: { start: 747, end: 755 }
          },
          directives: [
            {
              kind: 'Directive',
              name: {
                kind: 'Name',
                value: 'auth',
                loc: { start: 757, end: 761 }
              },
              arguments: [],
              loc: { start: 756, end: 761 }
            }
          ],
          loc: { start: 727, end: 761 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'deleteHelp',
            loc: { start: 764, end: 774 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 775, end: 777 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 779, end: 781 }
                  },
                  loc: { start: 779, end: 781 }
                },
                loc: { start: 779, end: 782 }
              },
              directives: [],
              loc: { start: 775, end: 782 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 785, end: 792 }
              },
              loc: { start: 785, end: 792 }
            },
            loc: { start: 785, end: 793 }
          },
          directives: [
            {
              kind: 'Directive',
              name: {
                kind: 'Name',
                value: 'auth',
                loc: { start: 795, end: 799 }
              },
              arguments: [],
              loc: { start: 794, end: 799 }
            }
          ],
          loc: { start: 764, end: 799 }
        }
      ],
      loc: { start: 566, end: 801 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 807, end: 812 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ping', loc: { start: 817, end: 821 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 823, end: 829 }
              },
              loc: { start: 823, end: 829 }
            },
            loc: { start: 823, end: 830 }
          },
          directives: [],
          loc: { start: 817, end: 830 }
        }
      ],
      loc: { start: 802, end: 832 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 838, end: 842 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 847, end: 849 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 851, end: 853 }
              },
              loc: { start: 851, end: 853 }
            },
            loc: { start: 851, end: 854 }
          },
          directives: [],
          loc: { start: 847, end: 854 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 857, end: 861 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 863, end: 869 }
              },
              loc: { start: 863, end: 869 }
            },
            loc: { start: 863, end: 870 }
          },
          directives: [],
          loc: { start: 857, end: 870 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 873, end: 878 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 880, end: 886 }
              },
              loc: { start: 880, end: 886 }
            },
            loc: { start: 880, end: 887 }
          },
          directives: [],
          loc: { start: 873, end: 887 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'password',
            loc: { start: 890, end: 898 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 900, end: 906 }
              },
              loc: { start: 900, end: 906 }
            },
            loc: { start: 900, end: 907 }
          },
          directives: [],
          loc: { start: 890, end: 907 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'phone', loc: { start: 910, end: 915 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 917, end: 923 }
              },
              loc: { start: 917, end: 923 }
            },
            loc: { start: 917, end: 924 }
          },
          directives: [],
          loc: { start: 910, end: 924 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'cpf', loc: { start: 927, end: 930 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 932, end: 938 }
              },
              loc: { start: 932, end: 938 }
            },
            loc: { start: 932, end: 939 }
          },
          directives: [],
          loc: { start: 927, end: 939 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'isAdmin',
            loc: { start: 942, end: 949 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 951, end: 958 }
              },
              loc: { start: 951, end: 958 }
            },
            loc: { start: 951, end: 959 }
          },
          directives: [],
          loc: { start: 942, end: 959 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'autorizado',
            loc: { start: 962, end: 972 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 974, end: 981 }
              },
              loc: { start: 974, end: 981 }
            },
            loc: { start: 974, end: 982 }
          },
          directives: [],
          loc: { start: 962, end: 982 }
        }
      ],
      loc: { start: 833, end: 984 }
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserInput',
        loc: { start: 992, end: 1001 }
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1006, end: 1010 }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1012, end: 1018 }
              },
              loc: { start: 1012, end: 1018 }
            },
            loc: { start: 1012, end: 1019 }
          },
          directives: [],
          loc: { start: 1006, end: 1019 }
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'email',
            loc: { start: 1022, end: 1027 }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1029, end: 1035 }
              },
              loc: { start: 1029, end: 1035 }
            },
            loc: { start: 1029, end: 1036 }
          },
          directives: [],
          loc: { start: 1022, end: 1036 }
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'password',
            loc: { start: 1039, end: 1047 }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1049, end: 1055 }
              },
              loc: { start: 1049, end: 1055 }
            },
            loc: { start: 1049, end: 1056 }
          },
          directives: [],
          loc: { start: 1039, end: 1056 }
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'phone',
            loc: { start: 1059, end: 1064 }
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
              loc: { start: 1066, end: 1072 }
            },
            loc: { start: 1066, end: 1072 }
          },
          directives: [],
          loc: { start: 1059, end: 1072 }
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'cpf', loc: { start: 1075, end: 1078 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1080, end: 1086 }
              },
              loc: { start: 1080, end: 1086 }
            },
            loc: { start: 1080, end: 1087 }
          },
          directives: [],
          loc: { start: 1075, end: 1087 }
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'administrador',
            loc: { start: 1090, end: 1103 }
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Boolean',
              loc: { start: 1105, end: 1112 }
            },
            loc: { start: 1105, end: 1112 }
          },
          directives: [],
          loc: { start: 1090, end: 1112 }
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'autorizado',
            loc: { start: 1115, end: 1125 }
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Boolean',
              loc: { start: 1127, end: 1134 }
            },
            loc: { start: 1127, end: 1134 }
          },
          directives: [],
          loc: { start: 1115, end: 1134 }
        }
      ],
      loc: { start: 986, end: 1136 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 1143, end: 1148 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'loadUsers',
            loc: { start: 1153, end: 1162 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'User',
                    loc: { start: 1165, end: 1169 }
                  },
                  loc: { start: 1165, end: 1169 }
                },
                loc: { start: 1165, end: 1170 }
              },
              loc: { start: 1164, end: 1171 }
            },
            loc: { start: 1164, end: 1172 }
          },
          directives: [
            {
              kind: 'Directive',
              name: {
                kind: 'Name',
                value: 'auth',
                loc: { start: 1174, end: 1178 }
              },
              arguments: [],
              loc: { start: 1173, end: 1178 }
            }
          ],
          loc: { start: 1153, end: 1178 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'getUser',
            loc: { start: 1181, end: 1188 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 1189, end: 1191 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 1193, end: 1195 }
                  },
                  loc: { start: 1193, end: 1195 }
                },
                loc: { start: 1193, end: 1196 }
              },
              directives: [],
              loc: { start: 1189, end: 1196 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1199, end: 1203 }
              },
              loc: { start: 1199, end: 1203 }
            },
            loc: { start: 1199, end: 1204 }
          },
          directives: [
            {
              kind: 'Directive',
              name: {
                kind: 'Name',
                value: 'auth',
                loc: { start: 1206, end: 1210 }
              },
              arguments: [],
              loc: { start: 1205, end: 1210 }
            }
          ],
          loc: { start: 1181, end: 1210 }
        }
      ],
      loc: { start: 1138, end: 1212 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Mutation',
        loc: { start: 1219, end: 1227 }
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createUser',
            loc: { start: 1232, end: 1242 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'data',
                loc: { start: 1243, end: 1247 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UserInput',
                    loc: { start: 1249, end: 1258 }
                  },
                  loc: { start: 1249, end: 1258 }
                },
                loc: { start: 1249, end: 1259 }
              },
              directives: [],
              loc: { start: 1243, end: 1259 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 1262, end: 1269 }
              },
              loc: { start: 1262, end: 1269 }
            },
            loc: { start: 1262, end: 1270 }
          },
          directives: [],
          loc: { start: 1232, end: 1270 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'autorizarUser',
            loc: { start: 1273, end: 1286 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 1287, end: 1289 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 1291, end: 1293 }
                  },
                  loc: { start: 1291, end: 1293 }
                },
                loc: { start: 1291, end: 1294 }
              },
              directives: [],
              loc: { start: 1287, end: 1294 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 1297, end: 1304 }
              },
              loc: { start: 1297, end: 1304 }
            },
            loc: { start: 1297, end: 1305 }
          },
          directives: [
            {
              kind: 'Directive',
              name: {
                kind: 'Name',
                value: 'auth',
                loc: { start: 1307, end: 1311 }
              },
              arguments: [],
              loc: { start: 1306, end: 1311 }
            }
          ],
          loc: { start: 1273, end: 1311 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'editUser',
            loc: { start: 1314, end: 1322 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'data',
                loc: { start: 1323, end: 1327 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UserInput',
                    loc: { start: 1329, end: 1338 }
                  },
                  loc: { start: 1329, end: 1338 }
                },
                loc: { start: 1329, end: 1339 }
              },
              directives: [],
              loc: { start: 1323, end: 1339 }
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 1341, end: 1343 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 1345, end: 1347 }
                  },
                  loc: { start: 1345, end: 1347 }
                },
                loc: { start: 1345, end: 1348 }
              },
              directives: [],
              loc: { start: 1341, end: 1348 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 1351, end: 1358 }
              },
              loc: { start: 1351, end: 1358 }
            },
            loc: { start: 1351, end: 1359 }
          },
          directives: [
            {
              kind: 'Directive',
              name: {
                kind: 'Name',
                value: 'auth',
                loc: { start: 1361, end: 1365 }
              },
              arguments: [],
              loc: { start: 1360, end: 1365 }
            }
          ],
          loc: { start: 1314, end: 1365 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'deleteUser',
            loc: { start: 1368, end: 1378 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 1379, end: 1381 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 1383, end: 1385 }
                  },
                  loc: { start: 1383, end: 1385 }
                },
                loc: { start: 1383, end: 1386 }
              },
              directives: [],
              loc: { start: 1379, end: 1386 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 1389, end: 1396 }
              },
              loc: { start: 1389, end: 1396 }
            },
            loc: { start: 1389, end: 1397 }
          },
          directives: [
            {
              kind: 'Directive',
              name: {
                kind: 'Name',
                value: 'auth',
                loc: { start: 1399, end: 1403 }
              },
              arguments: [],
              loc: { start: 1398, end: 1403 }
            }
          ],
          loc: { start: 1368, end: 1403 }
        }
      ],
      loc: { start: 1214, end: 1405 }
    }
  ],
  loc: { start: 0, end: 1405 }
} as unknown as DocumentNode
