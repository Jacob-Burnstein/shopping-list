"use client";

import React from "react";
import Link from "next/link";

const StoreList = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Image</td>
            <td>
              <Link href="/store"> Store Name</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StoreList;
