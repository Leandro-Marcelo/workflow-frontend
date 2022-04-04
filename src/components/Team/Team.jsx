import React from "react";
import { Link } from "react-router-dom";
import Default from "../../assets/img/teamImage.jpg";

const Team = ({ team }) => {
    return (
        <Link to={"/myteam/" + team._id}>
            <div className="text-center px-4 py-4">
                <h2 className="text-3xl text-white mb-4">
                    {team.name || "Team"}
                </h2>
                <img
                    src={
                        team.img ? "http://localhost:4000" + team.img : Default
                    }
                    alt={team.description}
                    className="w-[341.35px] h-[192px]"
                />
            </div>
        </Link>
    );
};

export default Team;
