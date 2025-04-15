import groq from 'groq'
import { sanityClient } from '../sanityClient'

export async function getHeaderLogo() {
  const headerLogoQuery = groq`
    *[_type == "contact"][0]{
      headerLogo
    }
  `
  return sanityClient.fetch(headerLogoQuery)
}

export async function getFooterLogo() {
  const footerLogoQuery = groq`
    *[_type == "contact"][0]{
      footerLogo
    }
  `
  return sanityClient.fetch(footerLogoQuery)
}

export async function getContactInfo() {
  const contactQuery = groq`
    *[_type == "contact"][0]{
      adress,
      telephone,
      email
    }
  `
  return sanityClient.fetch(contactQuery)
}

export async function getTabs() {
  const tabsQuery = groq`
    *[_type == "pageMaker"]{
      _id,
      title,
      slug
    }
  `
  return sanityClient.fetch(tabsQuery)
}

export async function getHomePage() {
  const homePageQuery = groq`
    *[_type == 'pageMaker' && title == "Accueil"][0]{
      title,
      sections[] {
        ...,
        items[] {
          ...,
        },
        "imageUrl": image.asset->url
      }
    }
  `
  return sanityClient.fetch(homePageQuery)
}

export async function getServicesPage() {
  const servicesPagesQuery = groq`
    *[_type == 'pageMaker' && title == "Services"][0]{
      title,
      sections[] {
        ...,
        items[] {
          ...,
        },
        "imageUrl": image.asset->url,
        "form": form->
      }
    }
  `
  return sanityClient.fetch(servicesPagesQuery)
}

export async function getAccountInfo(email: string, nom: string, nom_famille: string) {
  const accountPageQuery = groq`
    *[_type == 'inscription' && !(_id in path("drafts.**")) && email == $email && (nom match $nom || nom_famille match $nom_famille)]{
      _id,
      nom,
      nom_famille,
      email,
      linkedActivities[] {
        date,
        activityId-> {
          nom
        }
      },
      member_check
    }
  `
  return sanityClient.fetch(accountPageQuery, { email, nom, nom_famille })
}

export async function getMenu() {
  const menuQuery = groq`
    *[_type == "menu"] {
      pages[]-> {
        title,
        slug {
          current
        }
      }
    }
  `
  return sanityClient.fetch(menuQuery)
}

export async function getBannerList() {
  const bannerQuery = groq`
    *[_type == 'banner'] {
      bannerList[] {
        banner,
        textContent,
        isActive,
        bannerBgImage,
        bgColor,
        link
      },
      _type
    }
  `
  return sanityClient.fetch(bannerQuery)
}

export async function getAboutPage() {
  const aboutPageQuery = groq`
    *[_type in ["teamMember", "adminTeamMember", "missionImage", "temoignages"]]{
      _type,
      _id,
      _type == "teamMember" => {
        employees[] {
          ...
        }
      },
      _type == "adminTeamMember" => {
        members[] {
          _type,
          _key,
          name,
          role
        }
      },
      _type == "missionImage" => {
        image {
          ...,
          asset-> {
            ...,
            altText
          }
        },
        missionText
      },
      _type == "temoignages" => {
        temoignages
      }[0...2]
    }
  `
  return sanityClient.fetch(aboutPageQuery)
}

export async function getMemberActivities(memberId: string) {
  const memberActivitiesQuery = groq`
    *[_type == "activity" && dates[].members[]._ref == $memberId]
  `
  return sanityClient.fetch(memberActivitiesQuery, { memberId })
}

export async function getCardLink(pageId: string) {
  const cardLinkQuery = groq`
    *[_type == "pageMaker" && _id == $pageId] {
      slug,
      title
    }
  `
  return sanityClient.fetch(cardLinkQuery, { pageId })
}

export async function resolveButtonLink(card: { isPage?: boolean; link?: string; page?: { _ref: string } }) {
  if (card.isPage && card.page?._ref) {
    const result = await getCardLink(card.page._ref)
    return result?.[0]?.slug?.current || null
  }
  return card.link || null
}
