import tw, { styled } from "twin.macro"
import React from "react"
import Layout from "../layouts/Layout"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SimpleReactLightboxPro, { SRLWrapper } from "simple-react-lightbox-pro"

const Gallery = ({ data }) => {
  return (
    <div>
      <Layout>
        <OuterWrapper>
          <InnerWrapper>
            <GalleryTitle>{`${data.gallery.galleryName}`}</GalleryTitle>
            <SimpleReactLightboxPro>
              <SRLWrapper options={options}>
                <GalleryWrapper>
                  {data.gallery.galleryItems.map(({ localFile }) => (
                    <ImageWrap key={localFile.name}>
                      <PublicURL href={`${localFile.publicURL}`}>
                        <GatsbyImage
                          image={localFile.childImageSharp.gatsbyImageData}
                          alt={
                            localFile.name.split("_").join(" ").split(".")[0]
                          }
                          className="imageBox"
                        />
                      </PublicURL>
                    </ImageWrap>
                  ))}
                </GalleryWrapper>
              </SRLWrapper>
            </SimpleReactLightboxPro>
            <ButtonWrapper>
              <Button1>
                <Button1Style to="../real-estate-and-art-photography">
                  Next Gallery
                </Button1Style>
              </Button1>
              <Button2>
                <Button2Style to="../coastal-florida-photography">
                  Previous Gallery
                </Button2Style>
              </Button2>
            </ButtonWrapper>
          </InnerWrapper>
        </OuterWrapper>
      </Layout>
    </div>
  )
}

export default Gallery

export const pageQuery = graphql`
  query {
    gallery: contentfulGallery(
      galleryName: { eq: "Hurricane Larry Photography" }
    ) {
      id
      galleryName
      galleryDescription {
        childMdx {
          body
        }
      }
      galleryItems {
        title
        localFile {
          publicURL
          name
          childImageSharp {
            gatsbyImageData(
              width: 600
              height: 400
              quality: 50
              transformOptions: { fit: COVER }
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
const OuterWrapper = tw.div`
bg-fogra-light
`
const InnerWrapper = tw.div`
max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8
`
const GalleryTitle = tw.div`
text-center text-5xl sm:text-3xl text-base font-serif uppercase text-almond tracking-wider
`
const GalleryWrapper = tw.div`
mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8
`
const ImageWrap = styled.div`
  ${tw`col-span-1 flex justify-center items-center bg-fogra-light`}
  .imageBox {
    width: 100%;
  }
`
// I'm keeping these here for a possible overlay.
// const Overlay = tw.div`
// mt-2
// `
// const OverlayText = tw.h1`
// text-amber
// `
const PublicURL = tw.a`
text-fogra
`
const ButtonWrapper = tw.div`
mt-10 flex flex-row-reverse text-base max-w-prose mx-auto lg:max-w-none
`
const Button1 = tw.button`
rounded-md shadow
`
const Button2 = tw.button`
rounded-md shadow mx-4
`
const Button1Style = styled(Link)`
  ${tw`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ming hover:bg-ming-light`}
`
const Button2Style = styled(Link)`
  ${tw`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ming hover:bg-ming-light`}
`

// options for the lightbox
const options = {
  settings: {
    overlayColor: "#001524",
  },

  buttons: {
    backgroundColor: "#003052",
    iconColor: "#0077CC",
  },

  caption: {
    captionColor: "#EFB9A9",
    captionTextTransform: "uppercase",
  },
}
