import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage} from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby"

export const ContentfulImage = ( assetId ) =>
{
    const { assets }  = useStaticQuery(graphql` query {
        assets: allContentfulAsset {
            edges{
                node{
                    contentful_id
                    gatsbyImageData
                    title
                }
            }
         }
       }`)

       const asset = assets.edges.find(({ node }) => node.contentful_id === assetId)

       return asset;

}

const RichText = ( { content }  ) => {

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <bold>{text}</bold>,
  },

  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
        // const asset = useContentfulImage(assetId)
        
        const asset = ContentfulImage(node.data.target.sys.id)
        console.log(asset.node.gatsbyImageData)
        if(asset){
      return (
      <div className="flex justify-center py-6">
      <GatsbyImage image={asset.node.gatsbyImageData} alt={asset.node.title} />
        </div>
      )
     }
    },
  },
}


return (


    <div> {renderRichText(content, options) }</div>


    )
}

export default RichText;


