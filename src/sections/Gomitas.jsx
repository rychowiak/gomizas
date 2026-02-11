import { cocktailLists, mockTailLists } from "../../constants";

const Gomitas = () => {
  return (
    <section id="cocktails" className="noisy bg-white">
      <div className="list">
        <div className="popular">
          <h2>Most Popular</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>{country} - {detail}</p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2></h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li id={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>{country} - {detail}</p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Gomitas;
