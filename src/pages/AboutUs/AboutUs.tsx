import { Link } from "react-router-dom";
import { useGetAllVolunteerQuery } from "../../redux/features/volunteer/volunteerApi";

const AboutUs = () => {
  const { data: volunteers } = useGetAllVolunteerQuery(undefined);

  return (
    <div className="max-w-3xl mx-auto mt-16 px-4 sm:px-6 md:px-8">
      <section id="ourVolunteers" className="mt-8">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-4xl font-bold mb-4">Our Volunteers</h3>
          <Link
            to="/volunteer"
            className="btn glass bg-teal-500 rounded-lg text-white px-6 py-2 hover:bg-teal-800 text-lg"
          >
            Create Volunteer
          </Link>
        </div>
        {volunteers && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {volunteers.map((volunteer: any) => (
              <li
                key={volunteer._id}
                className="bg-white shadow-md rounded-md p-6 mb-4 transition-transform transform hover:scale-105"
              >
                <strong className="text-xl block mb-4">{volunteer.name}</strong>
                <div className="text-gray-600 mb-4">
                  <p>{volunteer.email}</p>
                  <p>Cell: {volunteer.phoneNumber}</p>
                </div>
                <p className="text-gray-800">
                  <strong className="text-lg">Location: </strong>
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
