import GridVector from '../grid-vector/grid-vector';

const Analytic = ({ label, value }: { label: string; value: number }) => {
  const styles = {
    number: [
      'text-md',
      'font-bold',
      'line-through',
      'decoration-black',
      'text-transparent',
      'bg-clip-text',
      'bg-gradient-to-b',
      'from-white',
      'from-50%',
      'via-black',
      'to-black',
    ].join(' '),
  };

  return (
    <div className="text-center">
      <h2 className={styles.number}>{value}</h2>
      <span className="text-sm">{label}</span>
    </div>
  );
};

const Analytics = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center overflow-hidden rounded-xl border border-line p-16 lg:p-24">
      {/* <div className="absolute top-0">
        <GridVector />
      </div> */}

      <span className="text-center text-base">Analytics</span>
      <h2 className="text-md font-bold">Some numbers about us</h2>

      <div className="relative flex w-full items-center justify-between pt-16">
        <Analytic label="Successful projects" value={750} />
        <Analytic label="Years of experience" value={145} />
        <Analytic label="Satisfied clients" value={526} />
        <Analytic label="Hours of work" value={72} />
      </div>
    </div>
  );
};

export default Analytics;