const SkillsCard = ({  icon, icon2, title, text, index }) => {
  return (
    <article>
      {index === 0 ? (
        <span className="flex">
          {icon}
          {icon2}
        </span>
      ) : (
        <span>{icon}</span>
      )}
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-600">{text}</p>
    </article>
  );
};

export default SkillsCard;
