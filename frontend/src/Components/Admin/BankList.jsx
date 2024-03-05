import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import MetaData from "../Layout/MetaData";
import Loader from "../Layout/Loader";
import { getToken } from "../../Utilitys/helpers";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./bank.css";
import { getUser } from '../../Utilitys/helpers';
import Header from "../Layout/Header";

const BankList = () => {
  const user = getUser();
  const [banks, setBanks] = useState([]);
  const [error, setError] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);
  let navigate = useNavigate();

  const getBank = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getToken()}`,
        },
      };

      const { data } = await axios.get(
        `http://localhost:4000/api/v1/allbanks`,
        config
      );
      console.log(data);
      setBanks(data.banks);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  useEffect(() => {
    getBank();

    if (error) {
      toast.error(error, {
        position:"top-right",
      });
    }

    if (deleteError) {
      toast.error(deleteError, {
        position:"top-right",
      });
    }

    if (isDeleted) {
      toast.success("Bank deleted successfully", {
        position:"top-right",
      });
      navigate("/banklist");
  window.location.reload()
      setIsDeleted(false);
      setDeleteError("");
    }
  }, []);

  const deleteBank = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getToken()}`,
        },
      };
      const { data } = await axios.delete(
        `http://localhost:4000/api/v1/bankinfo/${id}`,
        config
      );

      setIsDeleted(data.success);
      setLoading(false);
    } catch (error) {
      setDeleteError(error.response.data.message);
    }
  };

  const bankList = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "bankName",
          sort: "asc",
        },
        {
          label: "City",
          field: "city",
          sort: "asc",
        },
        {
          label: "PostalCode",
          field: "postalCode",
          sort: "asc",
        },
        {
          label: "Address",
          field: "address",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };

    banks.forEach((banks) => {
      data.rows.push({
        id: banks._id,
        bankName: banks.bankName,
        city: banks.city,
        postalCode: banks.postalCode,
        address: banks.address,
        actions: (
          <Fragment>
            <Link
              to={`/bankupdate/${banks._id}`}
              className="btn bg-blue-500 py-1 px-2 hover:bg-blue-700 "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 -0.5 25 25" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.265 4.16231L19.21 5.74531C19.3978 5.9283 19.5031 6.17982 19.5015 6.44201C19.5 6.70421 19.3919 6.9545 19.202 7.13531L17.724 8.93531L12.694 15.0723C12.6069 15.1749 12.4897 15.2473 12.359 15.2793L9.75102 15.8793C9.40496 15.8936 9.10654 15.6384 9.06702 15.2943L9.18902 12.7213C9.19806 12.5899 9.25006 12.4652 9.33702 12.3663L14.15 6.50131L15.845 4.43331C16.1743 3.98505 16.7938 3.86684 17.265 4.16231Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5 18.2413C5.08579 18.2413 4.75 18.5771 4.75 18.9913C4.75 19.4056 5.08579 19.7413 5.5 19.7413V18.2413ZM19.2 19.7413C19.6142 19.7413 19.95 19.4056 19.95 18.9913C19.95 18.5771 19.6142 18.2413 19.2 18.2413V19.7413ZM14.8455 6.22062C14.6904 5.83652 14.2534 5.65082 13.8693 5.80586C13.4852 5.9609 13.2995 6.39796 13.4545 6.78206L14.8455 6.22062ZM17.8893 9.66991C18.2933 9.57863 18.5468 9.17711 18.4556 8.77308C18.3643 8.36904 17.9628 8.1155 17.5587 8.20678L17.8893 9.66991ZM5.5 19.7413H19.2V18.2413H5.5V19.7413ZM13.4545 6.78206C13.6872 7.35843 14.165 8.18012 14.8765 8.8128C15.6011 9.45718 16.633 9.95371 17.8893 9.66991L17.5587 8.20678C16.916 8.35198 16.3609 8.12551 15.8733 7.69189C15.3725 7.24656 15.0128 6.63526 14.8455 6.22062L13.4545 6.78206Z" fill="#000000"/>
</svg>
            </Link>
            <button
              className="bg-red-500 btn py-1 px-2 ml-2 hover:bg-red-700"
              onClick={() => deleteProductHandler(banks._id)}
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="20p" height="20px" viewBox="0 0 24 24" fill="none">
<path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
          </Fragment>
        ),
      });
    });

    return data;
  };

  const deleteProductHandler = (id) => {
    deleteBank(id);
  };
  return (
    <Fragment>
          <MetaData title={"All Banks"} />
          <div className="flex justify-center bg-white items-center h-screen">
          <div className="bg-white">
                  <Header />
              </div>
              <div className="lg:grid flex flex-grow overflow-y-scroll justify-center items-center lg:min-h-screen">
            <div className="flex flex-col items-center bg-white ">
              <h1 className="my-1 font-bold text-lg text-black ">
                All Banks
              </h1>
              <div className="">
                <button className="inline-block rounded-lg bg-black ml-[900px] px-5 py-3 mb-5 text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black border-2">
                  <Link to="/bankCreate">Add Bank </Link>
                </button>
              </div>
              <div className="w-[1080px] overflow-x-auto">
                <Fragment>
                  {loading ? (
                    <Loader />
                  ) : (
                    <MDBDataTable
                      data={bankList()}
                      className="table border-2  border-black  shadow-lg p-10 text-black"
                      bordered
                      striped
                      hover
                      entriesOptions={[10, 20, 30]}
                      entries={3}
                      pagination
                      noBottomColumns
                    />
                  )}
                </Fragment>
              </div>
            </div>
          </div>
          </div>
      </Fragment>

  )
}

export default BankList