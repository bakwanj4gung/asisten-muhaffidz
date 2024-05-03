import React from 'react'
import PropTypes from "prop-types";
import NavBar from '@/components/NavBar';
import Image from 'next/image';


export default function DetailPencapaianPage({ color }) {
    return (
        <>
            <NavBar back={true} />
            <div className="px-4 h-full md:px-10 mx-auto w-full">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 flex justify-center">
                                <div className="relative">
                                <Image
                                    alt="..."
                                    src="/img/team-2-800x800.jpg"
                                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                                Jarwo (24)
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                                Los Angeles, California
                            </div>
                            <div className="mb-2 text-blueGray-600 mt-10">
                                <i className="fas fa-flag-checkered mr-2 text-lg text-blueGray-400"></i>
                                Target Pekanan : 20 Halaman
                            </div>
                            <div className="mb-2 text-blueGray-600">
                                <i className="fas fa-list-check mr-2 text-lg text-blueGray-400"></i>
                                Pencapaian Pekan ini : 10 Halaman
                            </div>
                        </div>
                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4">
                                <div
                    className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
                    }
                >
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                "font-semibold text-lg " +
                                (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                Rekap Setoran
                            </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                        <tr className="text-center">
                            <th
                            className={
                                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-2 whitespace-nowrap font-semibold " +
                                (color === "light"
                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                            }
                            >
                            Tanggal
                            </th>
                            <th
                            className={
                                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-2 whitespace-nowrap font-semibold " +
                                (color === "light"
                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                            }
                            >
                            Setoran
                            </th>
                            <th
                            className={
                                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-2 whitespace-nowrap font-semibold " +
                                (color === "light"
                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                            }
                            >
                            Murojaah
                            </th>
                            <th
                            className={
                                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold " +
                                (color === "light"
                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                            }
                            >
                            Nilai
                            </th>
                            <th
                            className={
                                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                (color === "light"
                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                            }
                            >
                            
                            </th>
                            <th
                            className={
                                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                (color === "light"
                                ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                            }
                            ></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            <span
                                className={
                                "ml-1 font-bold " +
                                +(color === "light" ? "text-blueGray-600" : "text-white")
                                }
                            >
                                21 Juni 2023
                            </span>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                Al-Baqarah:1 - Al-Baqarah:20
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                Hal. 12 - Hal. 20
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                A
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-ellipsis-vertical text-base px-2 mr-4 cursor-pointer transition hover:text-blue-500" />
                            </td>
                        </tr>
                        
                        </tbody>
                    </table>
                    </div>
                </div>
                                <a
                                    href="#pablo"
                                    className="font-normal text-lightBlue-500"
                                    // onClick={(e) => e.preventDefault()}
                                >
                                    Show more
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

DetailPencapaianPage.defaultProps = {
    color: "light",
};

DetailPencapaianPage.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
