export default interface IHeaderItems {
  label: string;
  url: string;
  subMenu?: IHeaderItems[];
}