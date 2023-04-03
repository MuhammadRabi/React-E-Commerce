/* import about from "../assets/images/about.jpg"
 */
import about from "../assets/images/about.jpg";
import SectionHeadline from "./UI/SectionHeadline";

const About = () => {
  return (
    <>
      <SectionHeadline name="About Us" />
      <div className="flex flex-col items-center justify-around gap-12 mt-16 lg:flex-row">
        <img
          src={about}
          className="w-full h-[450px] rounded-md object-cover flex-1"
          alt="about us image"
        />
        <article className="flex-1 leading-loose">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
          delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
          Eos quod quisquam esse recusandae vitae neque dolore, obcaecati
          incidunt sequi blanditiis est exercitationem molestiae delectus saepe
          odio eligendi modi porro eaque in libero minus unde sapiente
          consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis
          nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate
          accusamus nesciunt totam vitae esse iste.
        </article>
      </div>
    </>
  );
};
export default About;
