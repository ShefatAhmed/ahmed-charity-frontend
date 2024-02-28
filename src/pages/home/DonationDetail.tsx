import { Link, useParams } from "react-router-dom";
import { useGetAllDonationQuery } from "../../redux/features/donation/donationApi";
import { useState } from "react";
import Modal from "react-modal";
const modalStyles = {
  content: {
    width: "300px",
    height: "200px",
    margin: "auto",
    borderRadius: "8px",
  },
};
const DonationDetail = () => {
  const { id } = useParams();
  const { data }: any = useGetAllDonationQuery(undefined);

  const donation = data ? data.find((d: any) => d._id === id) : null;

  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handleDonateNowClick = () => {
    setConfirmationModalOpen(true);
  };

  const handleConfirmDonate = () => {
    setConfirmationModalOpen(false);
  };

  return (
    <div>
      {donation && (
        <div className="p-24">
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="col-span-12 md:col-span-6">
              <img
                src={donation.image}
                alt="Donation Image"
                className="rounded-lg"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <h1 className="text-4xl font-extrabold">{donation.title}</h1>
              <div className="my-5">
                <p>
                  Category:
                  <span className="font-bold">{donation.category}</span>
                </p>
                <p>
                  Amount: <span className="font-bold">${donation.amount}</span>
                </p>
                <p>
                  Description:
                  <span className="font-bold">{donation.description}</span>
                </p>
              </div>
              <button
                onClick={handleDonateNowClick}
                className="btn glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800 text-lg"
              >
                Donate Now
              </button>
            </div>
          </div>
          <Modal
            isOpen={confirmationModalOpen}
            onRequestClose={() => setConfirmationModalOpen(false)}
            contentLabel="Donation Confirmation Modal"
            style={modalStyles}
          >
            <p className="text-center font-extrabold text-xl mb-2">
              Confirm your donation for {donation.title}?
            </p>
            <div className="flex flex-col gap-1">
              <button
                onClick={handleConfirmDonate}
                className="glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800 text-lg"
              >
                <Link to="/dashboard">Yes, Donate Now</Link>
              </button>
              <h1 className="text-center">or</h1>
              <button
                onClick={() => setConfirmationModalOpen(false)}
                className="glass bg-red-500 rounded-lg text-white px-10 hover:bg-red-800 text-lg"
              >
                Cancel
              </button>
            </div>
          </Modal>
        </div>
      )}
      {!donation && <div>Donation not found</div>}
    </div>
  );
};

export default DonationDetail;
