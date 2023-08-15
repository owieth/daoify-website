const Logo = ({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 54 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 41.724L15.984 2C15.984 2 27.3852 2 34.1349 2C39.8476 2 47.7614 10.4556 50.6995 18.0927M2 41.724L7.03533 49.8694C7.03533 49.8694 35.4695 52.4568 42.9297 46.0095C50.3899 39.5622 52.8225 30.4263 51.7647 22.1151C51.6022 20.8382 51.2328 19.4789 50.6995 18.0927M2 41.724C2 41.724 25.3533 42.4066 33.1239 41.724C40.8945 41.0414 43.946 25.7861 43.946 25.7861H35.4695M35.4695 25.7861C35.4695 25.7861 33.2898 33.0976 32.321 33.8726C31.798 34.2911 27.2179 34.1384 21.7385 34.1384M35.4695 25.7861H24.571M46.0301 10.0897H21.6588L13.344 34.1384C13.344 34.1384 17.6474 34.0367 21.7385 34.1384M50.6995 18.0927H27.1382L24.571 25.7861M21.7385 34.1384L24.571 25.7861"
      stroke="white"
      strokeWidth="2.5"
    />
  </svg>
);

export default Logo;