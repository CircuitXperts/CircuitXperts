export interface MenuLink {
  mainNav?: {
    links: {
      title: string;
      href: string;
      class?: string;
      subMenu?: {
        title: string;
        href: string;
        desc?: string;
        buttonText?: string;
        numberTitle?: string;
        target?: string;
        subMenu?: {
          title: string;
          href: string;
        }[];
      }[];
    }[];
  };
  topUtilityNav?: {
    links: {
      title: string;
      href: string;
      target?: string;
      subMenu?: {
        title: string;
        href: string;
        target?: string;
        numberTitle?: string;
        desc?: string;
      }[];
    }[];
  };
}