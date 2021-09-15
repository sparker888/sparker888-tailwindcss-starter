import tw, {styled} from "twin.macro";
import React from 'react'
import { Link } from "gatsby"

export default function LinksDesktop() {

    return (
    <>
        <StyledLink to="/"
            activeStyle={tw`block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 font-semibold text-almond-light rounded`}>
            Stephen Parker
        </StyledLink>

        <StyledLink to="/daily-photo/"
            activeStyle={tw`block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 font-semibold text-almond-light rounded`}>
            Daily Photo
        </StyledLink>

        <StyledLink to="/projects/"
            activeStyle={tw`block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 font-semibold text-almond-light rounded`}>
            Projects
        </StyledLink>

        <StyledLink to="/skilltree/"
            activeStyle={tw`block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 font-semibold text-almond-light rounded`}>
            Skill Tree
        </StyledLink>

        <StyledLink to="/gallery/"
            activeStyle={tw`block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 font-semibold text-almond-light rounded`}>
            Gallery
        </StyledLink>

        <StyledLink to="/blog/"
            activeStyle={tw`block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 font-semibold text-almond-light rounded`}>
            My Blog
        </StyledLink>
    </>
    )
}

const StyledLink = styled(Link)`
${tw`hidden sm:block mt-1 px-2 py-1 font-semibold text-ming-light rounded hover:bg-fogra-light`};
`

