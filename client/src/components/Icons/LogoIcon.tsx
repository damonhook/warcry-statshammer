import { SvgIcon } from '@material-ui/core';
import React from 'react';

import { IIconProps } from './iconProps';

const LogoIcon = (props: IIconProps) => {
  return (
    <SvgIcon viewBox="0 0 512 512" {...props}>
      <path
        d="M 422.48,486.55
        C 412.40,486.55 404.11,483.19 397.61,476.47
          391.34,469.86 388.20,461.68 388.20,451.94
          388.20,441.75 391.45,433.40 397.95,426.91
          404.44,420.41 412.45,417.16 421.97,417.16
          431.16,417.16 439.05,420.36 445.66,426.74
          452.16,433.12 455.40,441.41 455.40,451.60
          455.40,462.02 451.99,470.59 445.16,477.31
          438.66,483.47 431.10,486.55 422.48,486.55
          422.48,486.55 422.48,486.55 422.48,486.55 Z
        M 421.64,475.46
        C 424.44,475.46 427.07,474.90 429.53,473.78
          432.11,472.66 434.35,471.09 436.25,469.08
          438.16,466.95 439.67,464.48 440.79,461.68
          441.91,458.77 442.47,455.58 442.47,452.11
          442.47,445.28 440.45,439.56 436.42,434.97
          432.28,430.49 427.52,428.25 422.14,428.25
          416.88,428.25 412.23,430.16 408.20,433.96
          403.60,438.56 401.31,444.44 401.31,451.60
          401.31,458.66 403.32,464.37 407.36,468.74
          411.39,473.22 416.15,475.46 421.64,475.46
          421.64,475.46 421.64,475.46 421.64,475.46 Z
        M 413.57,344.42
        C 413.57,344.42 426.00,344.42 426.00,344.42
          426.00,344.42 346.88,494.11 346.88,494.11
          346.88,494.11 334.61,494.11 334.61,494.11
          334.61,494.11 400.13,370.46 400.13,370.46
          400.13,370.46 399.63,369.96 399.63,369.96
          397.95,371.08 395.76,372.14 393.08,373.15
          390.39,374.04 387.59,374.49 384.68,374.49
          382.77,374.49 380.31,374.21 377.28,373.65
          374.37,372.98 371.40,371.97 368.38,370.63
          368.94,371.86 369.39,373.04 369.72,374.16
          370.06,375.16 370.34,376.12 370.56,377.01
          371.46,380.37 371.91,383.68 371.91,386.92
          371.91,396.78 368.66,405.01 362.16,411.62
          355.67,418.12 347.72,421.36 338.31,421.36
          328.79,421.36 320.84,418.12 314.45,411.62
          308.18,405.01 305.04,396.67 305.04,386.59
          305.04,376.51 308.24,368.16 314.62,361.56
          321.12,354.84 329.01,351.48 338.31,351.48
          342.90,351.48 350.18,353.49 360.15,357.52
          365.08,359.54 369.44,361.05 373.25,362.06
          377.17,362.96 380.59,363.40 383.50,363.40
          390.33,363.40 396.16,361.89 400.97,358.87
          406.68,355.40 410.88,350.58 413.57,344.42
          413.57,344.42 413.57,344.42 413.57,344.42 Z
        M 338.14,410.44
        C 343.74,410.44 348.61,408.20 352.76,403.72
          356.79,399.24 358.80,393.48 358.80,386.42
          358.80,382.84 358.24,379.59 357.12,376.68
          356.00,373.65 354.49,371.13 352.59,369.12
          350.80,366.99 348.67,365.36 346.20,364.24
          343.74,363.12 341.11,362.56 338.31,362.56
          335.51,362.56 332.88,363.12 330.41,364.24
          328.06,365.36 325.93,366.99 324.03,369.12
          322.24,371.13 320.78,373.65 319.66,376.68
          318.65,379.59 318.15,382.84 318.15,386.42
          318.15,394.04 320.33,400.08 324.70,404.56
          328.40,408.48 332.88,410.44 338.14,410.44 Z
        M 256.90,5.19
        C 256.90,5.19 237.36,85.99 237.36,85.99
          176.32,89.61 123.17,110.01 89.96,139.69
          89.96,139.69 38.47,125.51 38.47,125.51
          38.47,125.51 77.48,152.37 77.48,152.37
          62.30,170.07 53.68,190.27 53.68,211.72
          53.73,239.27 68.25,265.83 94.52,287.53
          94.52,287.53 9.52,346.09 9.52,346.09
          9.52,346.09 181.84,301.86 181.84,301.86
          124.01,285.60 84.07,250.98 83.97,210.90
          84.06,166.79 132.40,129.30 199.74,115.56
          201.51,115.23 203.15,114.91 204.80,114.60
          207.95,113.99 211.29,113.43 214.68,112.93
          217.39,112.56 219.96,112.22 222.54,111.92
          233.40,110.59 244.81,109.87 256.49,109.84
          256.49,109.84 256.50,109.84 256.50,109.84
          351.79,109.84 429.03,155.08 429.03,210.90
          429.03,210.90 429.03,210.90 429.03,210.90
          428.97,250.88 389.27,285.42 331.72,301.78
          331.72,301.78 504.28,346.09 504.28,346.09
          504.28,346.09 419.23,287.49 419.23,287.49
          445.50,265.81 460.05,239.26 460.12,211.72
          460.12,190.23 451.48,170.00 436.26,152.29
          436.26,152.29 475.26,125.40 475.26,125.40
          475.26,125.40 423.75,139.61 423.75,139.61
          390.54,109.97 337.43,89.60 276.45,85.99
          276.45,85.99 256.90,5.19 256.90,5.19 Z
        M 254.49,477.48
        C 254.49,477.48 218.53,317.48 218.53,317.48
          218.53,317.48 290.45,317.48 290.45,317.48
          290.45,317.48 254.49,477.48 254.49,477.48 Z
        M 161.31,152.66
        C 161.31,152.66 180.76,217.28 180.76,217.28
          180.76,217.28 151.32,217.28 151.32,217.28
          151.32,217.28 151.32,209.96 151.32,209.96
          151.32,209.96 121.32,227.28 121.32,227.28
          121.32,227.28 151.32,244.60 151.32,244.60
          151.32,244.60 151.32,237.28 151.32,237.28
          151.32,237.28 186.78,237.28 186.78,237.28
          186.78,237.28 206.62,303.18 206.62,303.18
          206.62,303.18 221.21,303.18 221.21,303.18
          221.21,303.18 257.12,172.05 257.12,172.05
          257.12,172.05 294.37,303.18 294.37,303.18
          294.37,303.18 308.96,303.18 308.96,303.18
          308.96,303.18 328.29,237.28 328.29,237.28
          328.29,237.28 361.32,237.28 361.32,237.28
          361.32,237.28 361.32,244.60 361.32,244.60
          361.32,244.60 391.32,227.28 391.32,227.28
          391.32,227.28 361.32,209.96 361.32,209.96
          361.32,209.96 361.32,217.28 361.32,217.28
          361.32,217.28 334.16,217.28 334.16,217.28
          334.16,217.28 353.12,152.66 353.12,152.66
          353.12,152.66 338.14,152.66 338.14,152.66
          338.14,152.66 301.66,280.72 301.66,280.72
          301.66,280.72 264.22,152.66 264.22,152.66
          264.22,152.66 249.63,152.66 249.63,152.66
          249.63,152.66 214.11,280.72 214.11,280.72
          214.11,280.72 177.05,152.66 177.05,152.66
          177.05,152.66 161.31,152.66 161.31,152.66 Z"
      />
    </SvgIcon>
  );
};

export default LogoIcon;
