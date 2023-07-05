"use client";
import Loading from "@/components/Loading";
import { useState } from "react";

export default function Home() {
  const [progress, setProgress] = useState(-1);
  const [files, setFiles] = useState<File | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSetFolder = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      setFiles(null);
      alert("Select a folder");
      return;
    } else {
      const formData = new FormData();
      formData.append("files", e.target.files as unknown as Blob);
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/upload-folder`, {
        method: "POST",
        body: formData,
      });
      // const zip = new JSZip();
      // const files = Array.from(e.target.files);
      // files.forEach((file) => {
      //   zip.file(file.webkitRelativePath, file);
      // });
      // zip
      //   .generateAsync({ type: "blob" }, throttledZipUpdate)
      //   .then(function (content) {
      //     saveAs(content, "files.zip");

      //     const formData = new FormData();
      //     formData.append("folderzip", content);
      //     console.log("ready to send to server", content);
      //   })
      //   .catch((e) => console.log(e));
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-50 bg-cover bg-no-repeat px-4 py-12 sm:px-6 lg:px-8">
      {loading ? <Loading /> : null}
      <div className="absolute inset-0 z-0 bg-black opacity-60"></div>
      <div className="z-10 w-full rounded-xl bg-white p-10 sm:max-w-lg">
        <div className="mt-8 space-y-3">
          <div className="grid grid-cols-1 gap-2">
            <div className="text-3xl uppercase font-bold text-center mb-5">
              Merge Metadata
            </div>

            <div className="bg-grey-lighter flex w-full items-center justify-center">
              <label className="text-blue border-blue hover:bg-blue flex w-64 cursor-pointer flex-col items-center rounded-lg border bg-white px-4 py-6 uppercase tracking-wide shadow-lg hover:text-blue-500">
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="mt-2 text-center text-base leading-normal">
                  {files ? files.length : "Select a folder"}
                </span>
                <input
                  type="file"
                  id="folderInput"
                  className="hidden"
                  /* @ts-expect-error */
                  directory=""
                  webkitdirectory=""
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleSetFolder(e)
                  }
                />
              </label>
            </div>

            {/* <div>
              <button
                type="button"
                className="focus:shadow-outline my-5 flex w-full cursor-pointer justify-center rounded-full  bg-blue-500 p-4
                                    font-semibold  tracking-wide text-gray-100 shadow-lg transition duration-300 ease-in hover:bg-blue-600 focus:outline-none disabled:bg-[#B7B7B7] disabled:text-[#090909] disabled:hover:cursor-not-allowed"
                disabled={!file}
                onClick={handleUploadFile}
              >
                Import
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
