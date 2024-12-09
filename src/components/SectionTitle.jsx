const SectionTitle = ({ title }) => {
  return (
    <article>
      <h2 className="text-3xl font-medium tracking-wider capitalize">
        {title}
      </h2>
      <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
    </article>
  );
};

export default SectionTitle;
