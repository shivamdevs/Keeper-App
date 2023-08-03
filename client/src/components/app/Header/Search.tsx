import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { MdClear } from 'react-icons/md';
import classNames from 'classnames';
import RoundButton from '../../common/RoundButton';
import HeightAnimateSection from '../../common/AnimatedSection';
import { useToggle } from 'react-unique-hooks';

function Search() {
    const [search, setSearch] = useState<string>("");
    const [focus, setFocus] = useToggle(false);
    return (
        <nav className="relative h-12 w-full max-w-xl">
            <div className={classNames(
                "inset-0 bottom-auto pt-12 rounded-xl transition-all",
                ((search.length || focus) ? "bg-white shadow-lg" : "bg-[#0001]"),
            )}>
                <HeightAnimateSection toggle={!!search}>
                    <div className="pt-3">
                        {search}
                    </div>
                </HeightAnimateSection>
            </div>
            <form className="absolute inset-0 rounded-xl overflow-hidden">
                <label htmlFor="search" className="absolute left-4 top-1/2 -translate-y-1/2 scale-125 text-gray-600"><IoMdSearch /></label>
                <input
                    type="search"
                    name="search"
                    id="search"
                    autoComplete="off"
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-transparent absolute inset-0 rounded-xl pl-10 pr-14 outline-none"
                    placeholder="Search for anything..."
                />
                <RoundButton
                    type="reset"
                    content="Clear"
                    className={classNames(
                        "absolute right-2 top-1/2 -translate-y-1/2",
                        {
                            "scale-0 invisible": !search.trim(),
                        }
                    )}
                    onClick={(e) => { setSearch(""); (e.target as any).previousElementSibling?.focus?.(); }}
                >
                    <MdClear />
                </RoundButton>
            </form>
        </nav>
    );
}

export default Search;
