import SearchBar from "./SearchBar"

export default function Nav({onSearch}) {
    return (
        <>
            <img src="https://www.shutterstock.com/image-vector/four-seasons-spring-summer-autumn-600nw-2324483365.jpg" alt="" />

            <SearchBar onSearch={onSearch} />
        
        </>
    )
}
