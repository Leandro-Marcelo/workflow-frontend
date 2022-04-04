import React, { useEffect, useState } from "react";
import Team from "../components/Team/Team";
import { FaWindowClose } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { createTeam, getTeams } from "../features/team/teamSlice";
import Navbar from "../components/Navbar";
import { aGet, aPost } from "../axios";

const MyTeam = () => {
    /* const { teams } = useSelector((state) => state.team); */
    /* const dispatch = useDispatch(); */
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        /* console.log(`se ejecuta?`); */
        /* dispatch(getTeams()); */
        aGet("http://localhost:4000/teams")
            .then((res) => setTeams(res.data))
            .catch((error) => console.log(error));
    }, []);
    const [modalOpened, setModalOpened] = useState(false);
    const addTeam = (event) => {
        event.preventDefault();
        const { name, img, description } = event.target;
        const newTeam = {
            name: name.value,
            img: img.value,
            description: description.value,
        };
        /* dispatch(createTeam(newTeam)); */
        aPost("http://localhost:4000/teams", newTeam).then((res) => {
            setTeams([...teams, res.data]);
        });
        setModalOpened(false);
    };

    const handleModal = () => {
        setModalOpened(!modalOpened);
    };
    return (
        <div>
            <Navbar setModalOpened={setModalOpened} />
            <div className="w-full min-h-screen bg-[#121212] flex justify-center items-center flex-col py-12">
                <div>
                    <div className="flex items-center justify-between mb-10 ">
                        <div>
                            <p className="text-[#fff] text-5xl ml-4 font-semibold">
                                Workspaces
                            </p>
                        </div>
                        <div className="flex ">
                            <button
                                onClick={handleModal}
                                className="mr-3  bg-[rgba(228,228,231,0.2)] hover:bg-white/40 px-2 py-1 h-[50px] w-[100px] text-white flex items-center justify-center rounded-[7px]"
                            >
                                Add Team
                            </button>
                        </div>
                    </div>
                    {/* bg-[green] */}
                    <div className=" grid grid-cols-1 md:grid-cols-3 w-[1200px] gap-10">
                        {console.log(teams)}
                        {teams.map((team) => (
                            <Team team={team} key={team._id} />
                        ))}
                        <div>
                            {modalOpened && (
                                <div>
                                    <div className="bg-white w-1/4 absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg">
                                        <button
                                            className="absolute right-5 top-5"
                                            onClick={handleModal}
                                        >
                                            <FaWindowClose className="w-8 h-8 text-lavender-800 hover:text-lavender-600" />
                                        </button>
                                        <h2 className="p-5 text-lavender-800 text-3xl font-bold">
                                            Create a new team
                                        </h2>
                                        <form
                                            className="flex flex-col p-5"
                                            onSubmit={addTeam}
                                        >
                                            <input
                                                className="p-4 bg-lavender-100 outline-none border focus:border-lavender-600 my-5 rounded-md"
                                                name="name"
                                                placeholder="Name..."
                                                type="text"
                                            />
                                            <input
                                                className="p-4 bg-lavender-100 outline-none border focus:border-lavender-600 my-5 rounded-md"
                                                name="img"
                                                placeholder="Image..."
                                                type="text"
                                            />
                                            <input
                                                className="p-4 bg-lavender-100 outline-none border focus:border-lavender-600 my-5 rounded-md"
                                                name="description"
                                                placeholder="Description..."
                                                type="text"
                                            />
                                            <button className="bg-lavender-900 mt-5 py-4 text-xl font-bold text-lavender-100 rounded-md">
                                                Crear equipo
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTeam;
