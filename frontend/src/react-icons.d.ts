import { SVGAttributes } from 'react';
import { ComponentType, SVGProps } from 'react';

// Fix for react-icons compatibility with @types/react@18.2.x
declare module 'react-icons/fa' {
  export interface IconBaseProps extends SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }
  export type IconType = ComponentType<IconBaseProps>;

  // Export all the icons used in the project
  export const FaAward: IconType;
  export const FaBalanceScale: IconType;
  export const FaBolt: IconType;
  export const FaCar: IconType;
  export const FaChartLine: IconType;
  export const FaCheckCircle: IconType;
  export const FaCheckDouble: IconType;
  export const FaChevronDown: IconType;
  export const FaChevronLeft: IconType;
  export const FaChevronRight: IconType;
  export const FaCogs: IconType;
  export const FaDollarSign: IconType;
  export const FaFileAlt: IconType;
  export const FaGavel: IconType;
  export const FaGlobeAmericas: IconType;
  export const FaGraduationCap: IconType;
  export const FaHandsHelping: IconType;
  export const FaHandshake: IconType;
  export const FaHardHat: IconType;
  export const FaIdCard: IconType;
  export const FaIndustry: IconType;
  export const FaLandmark: IconType;
  export const FaLeaf: IconType;
  export const FaLock: IconType;
  export const FaMicrochip: IconType;
  export const FaMicroscope: IconType;
  export const FaSearch: IconType;
  export const FaShieldAlt: IconType;
  export const FaStar: IconType;
  export const FaTachometerAlt: IconType;
  export const FaUserGraduate: IconType;
  export const FaUsers: IconType;
  export const FaUserTie: IconType;
  export const FaUtensils: IconType;
  export const FaBuilding: IconType;
  export const FaCertificate: IconType;
}

declare module 'react-icons' {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }
  export type IconType = ComponentType<IconBaseProps>;
}