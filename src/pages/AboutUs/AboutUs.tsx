import { useGetAllVolunteerQuery } from "../../redux/features/volunteer/volunteerApi";

const AboutUs = () => {
  const { data: volunteers } = useGetAllVolunteerQuery(undefined);

  return (
    <div className="max-w-3xl mx-auto mt-16 px-4 sm:px-6 md:px-8">
      <section id="ourVolunteers" className="mt-8">
        <h3 className="text-3xl font-bold mb-4">Our Volunteers</h3>
        {volunteers && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {volunteers.map((volunteer: any) => (
              <li
                key={volunteer._id}
                className="bg-white shadow-md rounded-md p-6 mb-4"
              >
                <strong className="text-lg block mb-2">{volunteer.name}</strong>
                <br />
                {volunteer.email} <br />
                <strong className="text-lg block mb-2">
                  Cell:
                  {volunteer.phoneNumber}
                </strong>
                <p className="block mb-2">
                  <strong className="text-lg ">Location: </strong>
                  {volunteer.location}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default AboutUs;
