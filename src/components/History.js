import React from "react";

export const History = () => {
  return (
    <div>
      <h3 className="mb-8 uppercase text-center border font-bold font">
        **Basic Audiological evaluation for adults**
      </h3>
      <div className="mb-4">
        <div className="flex flex-row-reverse ">
          <div className="w-1/3 flex flex-row-reverse items-center">
            <label for="name">الاسم</label>
            <input
              id="name"
              type="text"
              name="name"
              className="flex-grow px-2 py-1 me-2 ms-4 inline-block border rounded-md border-gray-500"
            />
          </div>
          <div className="w-1/6 flex flex-row-reverse items-center">
            <label for="age">السن</label>
            <input
              id="age"
              type="number"
              className="flex-grow px-2 py-1 w-16 ms-4 me-2 border border-gray-500 rounded-md"
            />
          </div>
          <div className="w-1/6 flex flex-row-reverse items-center">
            <label for="gender">الجنس</label>
            <select className="flex-grow px-2 py-1 ms-4 me-2 border border-gray-500 rounded-md">
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <div className="w-1/3 flex flex-row-reverse items-center text-center">
            <label className="inline-block " for="age">
              جهة التحويل
            </label>
            <input
              id="age"
              type="text"
              className="flex-grow px-2 py-1 ms-4 me-2 border border-gray-500 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse ">
          <div className="w-1/3 flex flex-row-reverse items-center">
            <label for="address">العنوان</label>
            <input
              id="address"
              type="text"
              name="name"
              className="flex-grow px-2 py-1 me-2 ms-4 inline-block border rounded-md border-gray-500"
            />
          </div>
          <div className="w-1/6 flex flex-row-reverse items-center">
            <label for="job">المهنة</label>
            <input
              id="job"
              type="number"
              className="flex-grow px-2 py-1 w-16 ms-4 me-2 border border-gray-500 rounded-md"
            />
          </div>
          <div className="w-1/6 flex flex-row-reverse items-center">
            <label for="number">الرقم</label>
            <input
              type="number"
              className="flex-grow px-2 py-1 w-16 ms-4 me-2 border border-gray-500 rounded-md"
            />
          </div>
          <div className="w-1/3 flex flex-row-reverse items-center text-center">
            <label className="inline-block " for="age">
              التاريخ
            </label>
            <input
              id="age"
              type="date"
              className="flex-grow px-2 py-1 ms-4 me-2 border border-gray-500 rounded-md"
            />
          </div>
        </div>
      </div>
      <div id="medical-history">
        <div className="flex text-center items-center">
          <label className="font-bold ms-1 uppercase" for="complaint">
            Complaint
          </label>
          <textarea
            id="complaint"
            className="px-4 py-2 mx-4 border border-gray-500 rounded-md grow"
          />
        </div>
      </div>
    </div>
  );
};

export default History;
