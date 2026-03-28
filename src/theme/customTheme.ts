export type CustomColors = {
  appShell?: {
    menu?: {
      color?: string;
      active?: {
        color?: string;
        background?: string;
      };
      border?: string;
      hover?: string;
      background?: string;
      inactive?: string;
    };
    backgroundColor?: string;
    color?: string;
  };
  inputBorderColor: string;
  borderColor: string;
  activeColor: string;
  dangerColor: string;
  inActiveColor: string;
};
type CustomThemeConfig = {
  brandColors: [string, string, string, string, string, string, string, string, string, string];
  default: CustomColors;
  light?: CustomColors;
  dark?: CustomColors;
};

const backgroundColors = {
  brown: '#a68168',
  green: '#5d772f',
  cyan: '#5090ab',
  blue: '#217ca3',
  red: '#b15757',
  orange: '#b34800',
}

const customs: Record<string, CustomThemeConfig> = {
  brown: {
    brandColors: [
      "#fff2e8",
      "#f4e5db",
      "#e1cab9",
      "#cfad94",
      "#c09475",
      "#b78461",
      "#b0774f",
      "#9d6a45",
      "#8d5d3b",
      "#7c4f2e"
    ],
    default: {
      appShell: {
        backgroundColor: backgroundColors.brown, // dark brown background
        color: '#ffffff',
        menu: {
          color: '#D9D9D9',
          active: {
            color: '#ffffff',
            background: backgroundColors.brown,
          },
          border: backgroundColors.brown, // deep brown-gray border
          background: backgroundColors.brown, // menu background dark brown
          hover: backgroundColors.brown, // same as main background
          inactive: backgroundColors.brown, // slightly lighter than background
        },
      },
      inputBorderColor: backgroundColors.brown,
      borderColor: backgroundColors.brown,
      dangerColor: '#CE3210',
      activeColor: '#2B8A3E',
      inActiveColor: '#2e2e2e',
    },
  },
  green: {
    brandColors: [
      "#f4fae9",
      "#e9f0db",
      "#d2dfba",
      "#bace96",
      "#a5bf77",
      "#98b563",
      "#8bab50",
      "#7d9b47",
      "#6e8a3c",
      "#5d772f"
    ],
    default: {
      appShell: {
        backgroundColor: backgroundColors.green, // dark brown background
        color: '#ffffff',
        menu: {
          color: '#D9D9D9',
          active: {
            color: '#ffffff',
            background: '#7d9b47',
          },
          border: backgroundColors.green, // deep brown-gray border
          background: backgroundColors.green, // menu background dark brown
          hover: backgroundColors.green, // same as main background
          inactive: backgroundColors.green, // slightly lighter than background
        },
      },
      inputBorderColor: backgroundColors.green,
      borderColor: backgroundColors.green,
      dangerColor: '#CE3210',
      activeColor: '#2B8A3E',
      inActiveColor: '#2e2e2e',
    },
  },
  cyan: {
    brandColors: [
      "#e6f9ff",
      "#daecf3",
      "#bad5e0",
      "#96bdce",
      "#78a9be",
      "#649cb4",
      "#5090ab",
      "#46829c",
      "#38748c",
      "#23657d",
    ],
    default: {
      appShell: {
        backgroundColor: backgroundColors.blue, // dark brown background
        color: '#ffffff',
        menu: {
          color: '#D9D9D9',
          active: {
            color: '#ffffff',
            background: backgroundColors.blue,
          },
          border: backgroundColors.blue, // deep brown-gray border
          background: backgroundColors.blue, // menu background dark brown
          hover: backgroundColors.blue, // same as main background
          inactive: backgroundColors.blue, // slightly lighter than background
        },
      },
      inputBorderColor: backgroundColors.blue,
      borderColor: backgroundColors.blue,
      dangerColor: '#CE3210',
      activeColor: '#2B8A3E',
      inActiveColor: '#2e2e2e',
    },
  },
  blue: {
    brandColors: [
      "#e8f9ff",
      "#d8eef7",
      "#b0daec",
      "#85c5e2",
      "#63b4d9",
      "#4ea9d3",
      "#40a4d2",
      "#308fba",
      "#217ca3",
      "#006e95"
    ],
    default: {
      appShell: {
        backgroundColor: backgroundColors.blue, // dark brown background
        color: '#ffffff',
        menu: {
          color: '#D9D9D9',
          active: {
            color: '#ffffff',
            background: backgroundColors.blue,
          },
          border: backgroundColors.blue, // deep brown-gray border
          background: backgroundColors.blue, // menu background dark brown
          hover: backgroundColors.blue, // same as main background
          inactive: backgroundColors.blue, // slightly lighter than background
        },
      },
      inputBorderColor: backgroundColors.blue,
      borderColor: backgroundColors.blue,
      dangerColor: '#CE3210',
      activeColor: '#2B8A3E',
      inActiveColor: '#2e2e2e',
    },
  },
  red: {
    brandColors: [
      "#ffeeef",
      "#f3ddde",
      "#e0bbbb",
      "#ce9596",
      "#be7576",
      "#b56162",
      "#b15757",
      "#964445",
      "#8c3e3f",
      "#7c3234"
    ],
    default: {
      appShell: {
        backgroundColor: backgroundColors.red, // dark brown background
        color: '#ffffff',
        menu: {
          color: '#D9D9D9',
          active: {
            color: '#ffffff',
            background: backgroundColors.red,
          },
          border: backgroundColors.red, // deep brown-gray border
          background: backgroundColors.red, // menu background dark brown
          hover: backgroundColors.red, // same as main background
          inactive: backgroundColors.red, // slightly lighter than background
        },
      },
      inputBorderColor: backgroundColors.red,
      borderColor: backgroundColors.red,
      dangerColor: '#CE3210',
      activeColor: '#2B8A3E',
      inActiveColor: '#2e2e2e',
    },
  },
  orange: {
    brandColors: [
      "#fff3eb",
      "#fbe4d4",
      "#fac5a3",
      "#faa56d",
      "#fa8a40",
      "#fa7926",
      "#fb701a",
      "#df5e10",
      "#c75309",
      "#b34800"
    ],
    default: {
      appShell: {
        backgroundColor: backgroundColors.orange, // dark brown background
        color: '#ffffff',
        menu: {
          color: '#D9D9D9',
          active: {
            color: '#ffffff',
            background: backgroundColors.orange,
          },
          border: backgroundColors.orange, // deep brown-gray border
          background: backgroundColors.orange, // menu background dark brown
          hover: backgroundColors.orange, // same as main background
          inactive: backgroundColors.orange, // slightly lighter than background
        },
      },
      inputBorderColor: backgroundColors.orange,
      borderColor: backgroundColors.orange,
      dangerColor: '#CE3210',
      activeColor: '#2B8A3E',
      inActiveColor: '#2e2e2e',
    },
  },
  elegant: {
    brandColors: [
      '#eaf3fb', // [0] lightest
      '#d6e6f7', // [1]
      '#bcd6f0', // [2]
      '#9bc1e7', // [3]
      '#79aadb', // [4]
      '#5f91c6', // [5]
      '#4a76a9', // [6]
      '#3e618c', // [7]
      '#7d9b47', // [8]
      '#273c59', // [9] darkest
    ],
    default: {
      appShell: {
        backgroundColor: '#17233B',
        color: '#ffffff',
        menu: {
          color: '#D9D9D9',
          active: {
            color: '#ffffff',
            background: '#3e618c',
          },
          border: '#3E4958',
          background: '#232D40',
          hover: '#17233B',
          inactive: '#222D40',
        },
      },
      inputBorderColor: '#9bc1e7',
      borderColor: '#3e618c',
      dangerColor: '#F2340A',
      activeColor: '#2b8a3e',
      inActiveColor: '#F2340A',
    },
  },
}

// const nktu = customs.brown;
// const nktu = customs.green;
// const nktu = customs.cyan;
// const nktu = customs.blue;
// const nktu = customs.red;

const nktu = customs.green;


export const themeConfig: Record<string, CustomThemeConfig> = {
  // cspell:words nktu
  nktu,
  orange: {
    brandColors: [
      '#f9f3eb', // [0] lightest
      '#f3e3ce', // [1]
      '#e9cca2', // [2]
      '#e0b474', // [3]
      '#d89b4a', // [4]
      '#c78936', // [5]
      '#b5792c', // [6]
      '#b97929', // [7] main
      '#955f22', // [8]
      '#73491a', // [9] darkest
    ],
    default: {
      appShell: {
        backgroundColor: '#2b2116', // dark brown background
        color: '#ffffff',
        menu: {
          color: '#D9D9D9',
          active: {
            color: '#ffffff',
            background: '#b97929',
          },
          border: '#3a2f24', // deep brown-gray border
          background: '#35281d', // menu background dark brown
          hover: '#2b2116', // same as main background
          inactive: '#2e2419', // slightly lighter than background
        },
      },
      inputBorderColor: '#e0b474',
      borderColor: '#b97929',
      dangerColor: '#FF5630',
      activeColor: '#2b8a3e',
      inActiveColor: '#2e2e2e',
    },
  },
  forest: {
    brandColors: [
      '#f0f7f1', // [0] lightest (Mint tint)
      '#dae9db', // [1]
      '#bdd7bf', // [2]
      '#9bc29e', // [3]
      '#78ab7c', // [4]
      '#5f9163', // [5]
      '#4a764d', // [6]
      '#3d613f', // [7]
      '#314e33', // [8]
      '#263c28', // [9] darkest (Deep Forest)
    ],
    default: {
      appShell: {
        backgroundColor: '#162418',
        color: '#ffffff',
        menu: {
          color: '#D9D9D9',
          active: {
            color: '#ffffff',
            background: '#3d613f',
          },
          border: '#3E493F',
          background: '#222d23',
          hover: '#162418',
          inactive: '#222d23',
        },
      },
      inputBorderColor: '#9bc29e',
      borderColor: '#3d613f',
      dangerColor: '#F2340A',
      activeColor: '#37b24d', // A slightly brighter green for "active" status
      inActiveColor: '#F2340A',
    },
  },
  elegant: {
    brandColors: [
      '#eaf3fb', // [0] lightest
      '#d6e6f7', // [1]
      '#bcd6f0', // [2]
      '#9bc1e7', // [3]
      '#79aadb', // [4]
      '#5f91c6', // [5]
      '#4a76a9', // [6]
      '#3e618c', // [7]
      '#7d9b47', // [8]
      '#273c59', // [9] darkest
    ],
    default: {
      appShell: {
        backgroundColor: '#17233B',
        color: '#ffffff',
        menu: {
          color: '#D9D9D9',
          active: {
            color: '#ffffff',
            background: '#3e618c',
          },
          border: '#3E4958',
          background: '#232D40',
          hover: '#17233B',
          inactive: '#222D40',
        },
      },
      inputBorderColor: '#9bc1e7',
      borderColor: '#3e618c',
      dangerColor: '#F2340A',
      activeColor: '#2b8a3e',
      inActiveColor: '#F2340A',
    },
  },
  origin: {
    brandColors: [
      '#ecf4ff',
      '#dce4f4',
      '#b8c6e3',
      '#91a7d2',
      '#708cc4',
      '#5b7bbb',
      '#5073b8',
      '#3f60a0',
      '#365793',
      '#294b83',
    ],
    default: {
      appShell: {
        backgroundColor: '#17233B',
        color: '#ffffff',
        menu: {
          color: '#D9D9D9',
          active: {
            color: '#ffffff',
            background: '#3f60a0',
          },
          border: '#3E4958',
          background: '#232D40',
          hover: '#17233B',
          inactive: '#222D40',
        },
      },
      inputBorderColor: '#b8c6e3',
      borderColor: '#3f60a0',
      activeColor: '#36B37E',
      dangerColor: '#FF5630',
      inActiveColor: 'gray',
    },
  },
  timeKeeper: {
    brandColors: [
      '#e6f5ef', // [0] lightest
      '#c9ebde', // [1]
      '#a6e0cb', // [2]
      '#80d4b4', // [3]
      '#5ac99d', // [4]
      '#44b287', // [5]
      '#359672', // [6]
      '#26956d', // [7] main
      '#1f7658', // [8]
      '#175b44', // [9] darkest
    ],
    default: {
      appShell: {
        backgroundColor: '#12261E', // dark green background
        color: '#ffffff',
        menu: {
          color: '#D9D9D9',
          active: {
            color: '#ffffff',
            background: '#26956d',
          },
          border: '#2C3A34', // muted green-gray border
          background: '#1A2F26', // menu background dark green
          hover: '#12261E', // same as main background
          inactive: '#192E25', // slightly lighter than background
        },
      },
      inputBorderColor: '#80d4b4',
      borderColor: '#26956d',
      dangerColor: '#FF5630',
      activeColor: '#2b8a3e',
      inActiveColor: '#2e2e2e',
    },
  },
} as const;
