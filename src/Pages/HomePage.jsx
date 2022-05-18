import react, { useRef, useEffect } from "react";
import Slider from "react-slick";
import Sardara from "../images/Sardara.jpg";
import bhagwant from "../images/bhagwant.jpg";
import Harpal from "../images/Harpal.jpg";
import HL from "../images/HL.jpg";
import VC from "../images/VC.jpg";
import main_img from "../images/main_img.jpg";
// import campus from "../Videos/campus.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from "./AboutUsPage";
import { useParams } from "react-router-dom";
// import promotion from "../Videos/promotion.mp4";
import Accordion from "./Accordion.css";
import { BiChevronDown } from "react-icons/bi";
import ReactAudioPlayer from 'react-audio-player';
import dhuni from "../audio/dhuni.mpeg";

const settings2 = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,

  slidesToShow: 3,
  slidesToScroll: 1,
};

const data = [
  {
    image: Sardara,
    name: "Sardara Singh Johl",
    description:
      "A former National Professor of Agricultural Economics of the Indian Council of Agricultural Research, he served as the vice chancellor of the Punjabi University and Punjab Agricultural University during different tenures and chaired the Commission for Agricultural Costs and Prices set up by the Government of India",
  },
  {
    image: Harpal,
    name: "Harpal Singh Cheema",
    description:
      "Done his LLB from Punjabi University, Patiala,he also participated in student politics as the campus president of Left-leaning Students Federation of India (SFI) while studying law.",
  },
  {
    image: HL,
    name: "H.L Verma",
    description:
      "He previously worked as Vice-Chancellor in Jagan Nath University, NCR.[5][6] Bahadurgarh, Haryana as Pro Vice-Chancellor (2000-2003), in Guru Jambheshwar University of Science and Technology[7] as Professor & Dean of Management (1996-2013)[8] and Pro- Vice Chancellor(2013-2014),[9][10] in Apeejay Satya University",
  },
  {
    image: bhagwant,
    name: "Bhagwant Singh Mann ",
    description:
      "Bhagwant Singh Mann (born 17 October 1973) is an Indian politician who is the 17th and current Chief Minister of Punjab. He leads the cabinet ministry of Punjab. He is a former actor, comedian and satirist.",
  },
];

const HomePage = () => {
  const dutiesRef = useRef(null);
  const aimsRef = useRef(null);

  const educationDropdownArrow = useRef(null);
  const educationList = useRef(null);

  const secondArrow = useRef(null);
  const secondList = useRef(null);

  const thirdArrow = useRef(null);
  const thirdList = useRef(null);

  const fourthArrow = useRef(null);
  const fourthList = useRef(null);

  const fifthArrow = useRef(null);
  const fifthList = useRef(null);

  function filterDropdownHandler(dropdownArrow, list) {
    list.current.classList.toggle("hideDrop");
    list.current.classList.toggle("pt-2");
    list.current.classList.toggle("hidden");
    dropdownArrow.current.classList.toggle("rotate-180");
  }

  const { goto } = useParams();
  useEffect(() => {
    if (goto === "duties") {
      dutiesRef.current.scrollIntoView();
    } else if (goto === "aims") {
      aimsRef.current.scrollIntoView();
    }
  });
  return (
    <>
      <div className="flex mx-5">
        <div className="w-[60vw] mr-5 ml-10">
          <h1 className="font-bold text-2xl ml-10 p-6">About Punjabi University</h1>
          <p className="p-2  text-justify space-x-4">
            Punjab Assembly established Punjabi University, Patiala under the
            Punjab Act No. 35 of 1961. Dr. S. Radhakrishnan, the then President
            of India laid foundation of Punjabi University on June 24, 1962. He
            preached, "The institutes of higher education share the burden of
            nation-building in a critically important sense. Our aim is a
            strong, free and democratic India where every citizen has an equal
            place and full opportunity of growth. In this task, a vast
            responsibility rests on our universities." Established on April 30,
            1962 in the erstwhile princely state of Patiala with the main
            objective of furthering the cause of Punjabi language, art and
            literature, Punjabi University has since evolved into the largest
            University in the state. This is the second University in the world
            to be named after a language, the first being Hebrew University of
            Israel. Its vision is to establish and incorporate a University for
            the advancement of Punjabi studies and development of Punjabi
            language as a medium of instruction or otherwise for providing
            instruction in humanistic and scientific subjects and generally for
            the promotion of education and research. The University started
            working from its present lush green, pollution free, 316 acres
            campus since 1965.
          </p>
          <p className="p-2  text-justify space-x-4">
            Initially University’s jurisdiction area was fixed as the 16 km
            radius having only 9 colleges. In 1969, it grew into an affiliating
            university, with 43 colleges affiliated to it. Now the university
            caters to the educational needs of nine Districts of Punjab. Over
            the time since its inception, the University has evolved into a
            multi-faceted and multi-faculty educational institution for the
            promotion of higher education and research in Humanities, Arts,
            Sciences, Engineering Languages, Technology and many more. Spread
            over 600 acres of land, its 1500+ teachers are imparting instruction
            and guidance to nearly 14,000+ students in a multi-faceted,
            multi-pronged and multi-faculty environment comprising 70+ Teaching
            and Research Departments/Chairs on its Campus, 27 Regional Centre/
            Neighbourhood Campuses/Constituent Colleges and 274 Colleges
            affiliated to it.
          </p>

          <hr />
        </div>
        <div className="w-[800px] p-5">
          <div className="flex text-lg gap-2 pb-2 font-semibold items-center">
            <h1>Dhuni</h1>
            <ReactAudioPlayer
              src={dhuni}
              controls
            />
          </div>
          <img
            src={main_img}
            className="w-full h-[90%] border-2 shadow-lg"
          ></img>
        </div>
      </div>
      
      <div className=" flex flex-col w-full px-12">
        <div className="flex justify-center pb-10 w-full overflow-hidden">
          <div className="w-64 h-64">
            <img className="w-full h-full mt-10 -mr-20" src={VC} alt="photo" />
          </div>
          <div className="container h-80 w-full  bg-slate-100 border-8 border-slate-200 mt-2 -ml-28 -z-10">
            <h1 className="text-2xl font-bold text-center mt-4">
              Vice Chancellor Message
              <br />
              <span className="font-normal"> Professor. Arvind </span>
            </h1>
            <br />
            <p className="ml-32 mr-4 h-[320px] overflow-hidden">
              I am privileged and honoured to have been given the opportunity of
              serving as Vice Chancellor of Punjabi University, Patiala, which
              is amongst the premier institutions of higher learning. The
              University was established on April 30, 1962 with a mandate to
              promote Punjabi language, literature and culture, and was the
              second university in the world to have been named after a
              language. It has since emerged as a key institution for imparting
              high-quality education and to perform cutting-edge research in the
              areas of life sciences, physical sciences, medicine, engineering
              and technology, business studies, law, social sciences, languages,
              education, information sciences, and arts and culture.
            </p>
          </div>

          <div className="w-80 h-44 mt-32">
            <iframe src="" alt="campus" className="w-full h-full" />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex justify-center pb-10 overflow-hidden">
            <div className="w-40 h-40 mt-16 ml-18">
              <img
                className="w-full h-full mt-10"
                src="data:image/jpeg;base64,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"
                alt="photo"
              />
            </div>
            <div className="container w-full h-80  bg-slate-100 border-8 border-slate-200 mt-2 -ml-20 -z-10">
              <h1 className="text-2xl font-bold text-center mt-4 ml-4">
                Dean Alumni Message
                <br />
                <span className="font-normal ml-4">
                  {" "}
                  Professor. Satnam Singh Sandhu
                </span>
              </h1>
              <br />

              <p className="mr-32 ml-24 h-[320px] overflow-hidden">
                I am privileged and honoured to have been given the opportunity
                of serving as Vice Chancellor of Punjabi University, Patiala,
                which is amongst the premier institutions of higher learning.
                <br />
                {/* <div className="text-center mt-3">Know More...</div> */}
              </p>
            </div>
          </div>
          <div className="flex justify-center pb-10 w-full overflow-hidden">
            <div className="w-40 h-40 mt-16">
              <img
                className="w-full h-full mt-10 "
                src="https://csepup.ac.in/images/dws.png"
                alt="photo"
              />
            </div>
            <div className="container h-80 w-full  bg-slate-100 border-8 border-slate-200 mt-2 -ml-28 mr-20 -z-10">
              <h1 className="text-2xl font-bold text-center mt-4">
                Co-ordinator Message
                <br />
                <span className="font-normal">
                  {" "}
                  Professor. William Jeet Singh
                </span>
              </h1>
              <br />
              <p className="ml-32 mr-4 h-[320px] overflow-hidden">
                I am privileged and honoured to have been given the opportunity
                of serving as Vice Chancellor of Punjabi University, Patiala,
                which is amongst the premier institutions of higher learning.
                <br />
                {/* <div className="text-center mt-8">Know More...</div> */}
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-10 mb-10 ml-10 mr-10  ">
        <iframe
          className="aspect-video m-auto h-96 rounded-lg shadow-lg shadow-yellow-800/40"
          src=""
          allow="autoplay"
        >
          {" "}
          frameborder="0" allow="accelerometer; ; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
        </iframe>
      </div>

      

      <div className="pt-6 pb-12  mx-12 my-8 " id="Aims" ref={aimsRef}>
        <div id="card" className="block">
          <div className="container w-[84rem]  mx-auto flex flex-col ">
            <div
              v-for="card in cards"
              className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2 border-2"
            >
              <div className="h-auto  w-auto md:w-1/2">
                <img
                  className="inset-0 h-full w-full object-cover object-center"
                  src="http://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/04/13/Pictures/_b38814fa-2029-11e7-beb7-f1cbdf0743d8.jpg"
                />
              </div>
              <div className="w-full py-4 px-6 text-gray-800 flex flex-col ">
                <h3 className="font-bold text-2xl px-4 py-2">
                  Aims and Objectives
                </h3>
                <ul className="list-disc text-left list-inside space-x-4 font-medium text-gray-800 ">
                  <li className="ml-4">
                    To foster a spirit of brotherhood and comradeship amongst
                    the alumni of the University
                  </li>
                  <li>
                    To arrange and collect funds for the development of the
                    University.
                  </li>
                  <li>To arrange social and cultural functions.</li>
                  <li>
                    To further the interests of the Punjabi University, Patiala
                    in general.
                  </li>
                  <li>
                    To provide a forum for the alumni of the University for
                    exchange of ideas and views on educational, cultural, social
                    and academic problems of the day.
                  </li>
                  <li>
                    To publish literature, papers and journals for the
                    fulfillment of the objects of the Association.
                  </li>
                  <li>
                    To look after the interest of the alumni of the University.
                  </li>
                  <li>To open branches of the Association.</li>
                  <li className="mb-4">
                    To do all other acts in furtherance of the objects of the
                    association.
                  </li>
                </ul>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="p-8 mx-12">
  <div className="bg-white p-6 rounded-lg w-[80rem] shadow-xl mx-8 border-2">
    <h2 className="text-[1.7rem] font-bold mb-2 text-gray-800 text-center">Alumni Chapter</h2>
    <ul className="list-disc text-left list-inside space-x-4 text-gray-700 font-semibold text-[1.1rem]">
        <li className="ml-4">Dr. Gurvinder Singh Dhaliwal , coordinator of Punjabi University Alumni Association, British Columbia Chapter, Canada.</li>
        <li>S. Dhanwant Singh, Coordinator of Punjabi University Alumni Association, Admoton Chapter, Canada.</li>
        <li>S. Manjinder Pal Singh Coordinator of Punjabi University Alumni Association, Winnipeg Chapter, Canada</li>
        <li className="mb-4">S. Ajaib Singh and S. Paramjit Singh Gill Coordinator of Punjabi University Alumni Association, Ontario Chapter Canada</li>
    </ul> 
  </div>
</div> */}

      {/* Accordion Code here */}
      <h1
        className="font-bold text-3xl p-1 max-w-full  mt-4 mb-[-80px] text-center"
        id="Duties"
        ref={dutiesRef}
      >
        Duties and Functions of Office Bearers
      </h1>

      <div className="acc-body max-w-full">
        <div
          className="flex font-bold justify-between items-center acc"
          onClick={() =>
            filterDropdownHandler(educationDropdownArrow, educationList)
          }
        >
          <h1 className="text-gray-800 text-xl">CHIEF PATRON</h1>
          <div ref={educationDropdownArrow} className="arrow">
            <BiChevronDown className="h-6 w-6" />
          </div>
        </div>
        <div
          className="h-0 hidden acc-child text-gray-600 text-lg font-medium"
          ref={educationList}
        >
          <ol className=" list-inside list-decimal text-left space-x-4">
            <li className="ml-4">
              The Chief Patron shall preside over the meetings of the
              Association, the meetings of the Executive Council and all other
              functions that may be organised by the Association.
            </li>
            <li>
              The Chief Patron shall be the custodian of the property and
              interests of the Association.
            </li>
            <li>
              He shall call special meetings of the Executive Council/General
              Body of the Association if a written requisition signed by at
              least 7 members in case of Executive Council and 30 members in
              case of the Association is presented to him.
            </li>
          </ol>
        </div>

        <div
          className="flex font-bold justify-between items-center acc"
          onClick={() => filterDropdownHandler(secondArrow, secondList)}
        >
          <h1 className="text-gray-800 text-xl">
            PRESIDENT /SENIOR VICE-PRESIDENT
          </h1>
          <div ref={secondArrow} className="arrow">
            <BiChevronDown className="h-6 w-6" />
          </div>
        </div>
        <div
          className="h-0 hidden acc-child text-gray-600 text-lg font-medium"
          ref={secondList}
        >
          <ol className=" list-inside list-decimal text-left space-x-4">
            <li className="ml-4">
              The president shall perform the duties and functions of the Chief
              Patron in his absence. The Senior Vice-President shall perform the
              duties and function of the President in his absence.
            </li>
            <li>
              President/Senior Vice-President shall perform such other duties
              and functions as may be entrusted to him by the Chief Patron or
              the Executive Council.
            </li>
          </ol>
        </div>

        <div
          className="flex font-bold justify-between items-center acc"
          onClick={() => filterDropdownHandler(thirdArrow, thirdList)}
        >
          <h1 className="text-gray-800 text-xl">GENERAL SECRETARY</h1>
          <div ref={thirdArrow} className="arrow">
            <BiChevronDown className="h-6 w-6" />
          </div>
        </div>
        <div
          className="h-0 hidden acc-child  text-gray-600 text-lg font-medium"
          ref={thirdList}
        >
          <ol className=" list-inside list-decimal text-left space-x-4">
            <li className="ml-4">
              He will be the custodian of all the records and documents of the
              Association.
            </li>
            <li>
              He will be responsible for the safe custody of the funds of the
              Association and will operate bank accounts jointly with either
              Secretary or Joint-Secretary-cum- treasurer on behalf of the
              Association.
            </li>
            <li>
              He will call and arrange meetings of the Executive Council and the
              Association.
            </li>
            <li>
              He will record the minutes of the meetings of the Executive
              Council and the Association.
            </li>
            <li>
              He will represent the Association in all legal proceedings and
              sign all legal documents on behalf of the Association.
            </li>
            <li>
              He will maintain an up-to-date register of members and of all
              subscriptions and donations.
            </li>
            <li>
              He will maintain a property register and all such registers as may
              be necessary in connection with the work of the Association.
            </li>
          </ol>
        </div>

        <div
          className="flex font-bold justify-between items-center acc"
          onClick={() => filterDropdownHandler(fourthArrow, fourthList)}
        >
          <h1 className="text-gray-800 text-xl">SECRETARY</h1>
          <div ref={fourthArrow} className="arrow">
            <BiChevronDown className="h-6 w-6" />
          </div>
        </div>
        <div
          className="h-0 hidden acc-child text-gray-600 text-lg font-medium"
          ref={fourthList}
        >
          <ol className=" list-inside list-decimal text-left space-x-4">
            <li className="ml-4">
              He will assist General Secretary in the administrative matters.
            </li>
            <li>
              He will also assist General Secretary in conducting activities of
              the Association.
            </li>
          </ol>
        </div>

        <div
          className="flex font-bold justify-between items-center acc"
          onClick={() => filterDropdownHandler(fifthArrow, fifthList)}
        >
          <h1 className="text-gray-800 text-xl">
            JOINT SECRETARY-CUM-TREASURER
          </h1>
          <div ref={fifthArrow} className="arrow">
            <BiChevronDown className="h-6 w-6" />
          </div>
        </div>
        <div
          className="h-0 hidden acc-child text-gray-600 text-lg font-medium"
          ref={fifthList}
        >
          <ol className=" list-inside list-decimal text-left space-x-4">
            <li className="ml-4">
              He will assist the General Secretary in the discharge of his
              duties and functions regarding finances/accounts of the
              Association.
            </li>
            <li>
              He will perform such other duties and functions as may be
              entrusted to him by the Executive Council.
            </li>
          </ol>
        </div>
      </div>

      <h1 className="pl-40 text-3xl text-black-900 font-bold underline mt-4">
        Notable Alumni
      </h1>
      <Slider {...settings2} className=" notable_alumni_slider mx-40">
        {data.map((obj) => (
          <div className="flex flex-col items-center h-60 w-32 p-3  m-6 gap-6 ">
            <div className="shadow-xl">
              <div className="bg-[#b8dded] w-full">
                <img
                  className="h-56 w-56 p-6 rounded-full mx-auto "
                  src={obj.image}
                />
              </div>
              <div>
                <h1 className="pl-6 text-2xl  pt-2 pb-2">{obj.name}</h1>
              </div>
              <div>
                <p className="pl-6 h-72 ">{obj.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default HomePage;
