declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => void;
    previous: { finalY: number };
  }
}
