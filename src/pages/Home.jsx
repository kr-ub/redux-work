import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CounterContainer from "../containers/CounterContainer";

export default function Home() {
  const dispatch = useDispatch();

  function click() {}

  return (
    <div>
      <CounterContainer />
    </div>
  );
}
