import imgJeremy from "../../../assets/images/image-jeremy.png";

function Top() {
  return (
    <div className="bg-userBlue flex flex-[1_1_30%] items-center gap-4 rounded-2xl p-6 md:flex-col md:items-start md:gap-y-10 lg:flex-[1_1_70%]">
      <img
        src={imgJeremy}
        alt="Jeremy"
        className="w-1/4 rounded-full border-[3px] border-white md:w-1/2"
      />
      <div>
        <p className="text-userPaleBlue text-sm">Report for</p>
        <p className="text-userCardTitleSize text-2xl font-light leading-[3rem] md:text-[2.5rem]">
          Jeremy Robson
        </p>
      </div>
    </div>
  );
}

export default Top;
