"use client";

import { Button, SearchField } from "@heroui/react";
import React, { useState } from "react";

const SearchbBar = ({ courses, setFilteredCourses }) => {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        const result = courses.filter((course) =>
            course.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredCourses(result);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="flex items-center gap-2">

            <SearchField className="border-sky-200 rounded-md" aria-label="Search courses">
                <SearchField.Group>
                    <SearchField.SearchIcon />

                    <SearchField.Input
                        className="w-40 px-2 py-2 outline-none border-none focus:ring-0 bg-transparent"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />

                    <SearchField.ClearButton onClick={() => setSearch("")} />
                </SearchField.Group>
            </SearchField>

            <Button
                className="bg-blue-500 hover:bg-blue-900 rounded-xl text-white"
                onClick={handleSearch}
            >
                Search
            </Button>
        </div>
    );
};

export default SearchbBar;