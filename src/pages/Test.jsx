import React, { useEffect } from "react";
import { aGet, aPost, aPut } from "../axios";
import { useSelector, useDispatch } from "react-redux";

const Test = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <div className="w-full h-screen">
            <div className="">
                <form action=""></form>
            </div>
        </div>
    );
};

export default Test;
