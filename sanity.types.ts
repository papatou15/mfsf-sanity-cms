/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type MissionImage = {
  _id: string
  _type: 'missionImage'
  _createdAt: string
  _updatedAt: string
  _rev: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}

export type AdminTeamMember = {
  _id: string
  _type: 'adminTeamMember'
  _createdAt: string
  _updatedAt: string
  _rev: string
  members?: Array<{
    name?: string
    role?: string
    _type: 'member'
    _key: string
  }>
}

export type MeetingNotes = {
  _id: string
  _type: 'meetingNotes'
  _createdAt: string
  _updatedAt: string
  _rev: string
  patient?: {
    memberCheck?: boolean
    name?: string
    member?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'inscription'
    }
  }
  meetings?: Array<{
    date?: string
    subjects?: Array<string>
    notes?: Array<{
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
      listItem?: 'bullet' | 'number'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }>
    _type: 'meeting'
    _key: string
  }>
}

export type TeamMember = {
  _id: string
  _type: 'teamMember'
  _createdAt: string
  _updatedAt: string
  _rev: string
  employees?: Array<{
    name?: string
    role?: string
    description?: string
    picture?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    }
    contacts?: {
      email?: string
      phone?: string
    }
    _type: 'employee'
    _key: string
  }>
}

export type FormButton = {
  _type: 'formButton'
  title?: string
  form?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'formulaires'
  }
  style?: 'coloredbg' | 'smallbg' | 'colorless' | 'smallcolorless'
}

export type ConditionalField = {
  _type: 'conditionalField'
  label?: string
  triggerValue?: string
  options?: Array<string>
  revealedFields?: Array<
    | ({
        _key: string
      } & LargeTitle)
    | ({
        _key: string
      } & MediumTitle)
    | ({
        _key: string
      } & SmallTitle)
    | ({
        _key: string
      } & Button)
    | ({
        _key: string
      } & TextField)
    | ({
        _key: string
      } & CheckboxField)
    | ({
        _key: string
      } & RadioField)
    | ({
        _key: string
      } & DropdownField)
    | ({
        _key: string
      } & DateField)
    | ({
        _key: string
      } & ConditionalField)
  >
}

export type DateField = {
  _type: 'dateField'
  label?: string
  required?: boolean
}

export type RadioField = {
  _type: 'radioField'
  label?: string
  options?: Array<string>
  required?: boolean
}

export type DropdownField = {
  _type: 'dropdownField'
  label?: string
  options?: Array<string>
  required?: boolean
}

export type TextField = {
  _type: 'textField'
  label?: string
  placeholder?: string
  multiSelect?: boolean
  required?: boolean
}

export type CheckboxField = {
  _type: 'checkboxField'
  label?: string
  options?: Array<string>
  required?: boolean
}

export type Contact = {
  _id: string
  _type: 'contact'
  _createdAt: string
  _updatedAt: string
  _rev: string
  adress?: string
  telephone?: string
  email?: string
  headerLogo?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  footerLogo?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}

export type TextOnPicture = {
  _type: 'textOnPicture'
  title?: string
  text?: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  layout?: 'default' | 'reverse'
  bgColor?: Color
}

export type Carousel = {
  _type: 'carousel'
  title?: string
  images?: Array<{
    carouselImage?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    }
    link?: string
    _type: 'imageGroup'
    _key: string
  }>
}

export type Button = {
  _type: 'button'
  title?: string
  link?: string
  style?: 'coloredbg' | 'smallbg' | 'colorless' | 'smallcolorless'
}

export type Card = {
  _type: 'card'
  title?: string
  subtitle?: string
  modalContent?: StackBlock
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  layout?: 'bigCard' | 'smallCard'
  color?: Color
}

export type StringText = {
  _type: 'stringText'
  string?: string
}

export type TextInput = {
  _type: 'textInput'
  text?: string
}

export type SmallTitle = {
  _type: 'smallTitle'
  title?: string
}

export type MediumTitle = {
  _type: 'mediumTitle'
  title?: string
}

export type LargeTitle = {
  _type: 'largeTitle'
  title?: string
}

export type StackBlock = {
  _type: 'stackBlock'
  items?: Array<
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
        _key: string
      }
    | ({
        _key: string
      } & LargeTitle)
    | ({
        _key: string
      } & MediumTitle)
    | ({
        _key: string
      } & SmallTitle)
    | ({
        _key: string
      } & StringText)
    | ({
        _key: string
      } & TextInput)
    | ({
        _key: string
      } & Card)
    | ({
        _key: string
      } & Button)
    | ({
        _key: string
      } & FormButton)
    | ({
        _key: string
      } & Carousel)
    | ({
        _key: string
      } & TextOnPicture)
    | ({
        _key: string
      } & ColumnBlock)
    | ({
        _key: string
      } & StackBlock)
  >
  layout?: 'horizontal' | 'vertical'
  bgColor?: Color
}

export type ColumnBlock = {
  _type: 'columnBlock'
  layout?: 'two' | 'three'
  column1?: Array<
    | ({
        _key: string
      } & LargeTitle)
    | ({
        _key: string
      } & MediumTitle)
    | ({
        _key: string
      } & SmallTitle)
    | ({
        _key: string
      } & TextInput)
    | ({
        _key: string
      } & StackBlock)
    | ({
        _key: string
      } & Card)
    | ({
        _key: string
      } & Button)
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
        _key: string
      }
    | ({
        _key: string
      } & Carousel)
    | ({
        _key: string
      } & TextOnPicture)
  >
  column2?: Array<
    | ({
        _key: string
      } & LargeTitle)
    | ({
        _key: string
      } & MediumTitle)
    | ({
        _key: string
      } & SmallTitle)
    | ({
        _key: string
      } & TextInput)
    | ({
        _key: string
      } & StackBlock)
    | ({
        _key: string
      } & Card)
    | ({
        _key: string
      } & Button)
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
        _key: string
      }
    | ({
        _key: string
      } & Carousel)
    | ({
        _key: string
      } & TextOnPicture)
  >
  column3?: Array<
    | ({
        _key: string
      } & LargeTitle)
    | ({
        _key: string
      } & MediumTitle)
    | ({
        _key: string
      } & SmallTitle)
    | ({
        _key: string
      } & TextInput)
    | ({
        _key: string
      } & StackBlock)
    | ({
        _key: string
      } & Card)
    | ({
        _key: string
      } & Button)
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
        _key: string
      }
    | ({
        _key: string
      } & Carousel)
    | ({
        _key: string
      } & TextOnPicture)
    | ({
        _key: string
      } & FormButton)
  >
  bgColor?: Color
}

export type HeroSection = {
  _type: 'heroSection'
  title?: string
  subTitle?: string
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  layout?: 'default' | 'mirrored'
  bgColor?: Color
}

export type ContactForm = {
  _id: string
  _type: 'contactForm'
  _createdAt: string
  _updatedAt: string
  _rev: string
  email?: string
  subject?: string
  message?: string
  createdAt?: string
}

export type Menu = {
  _id: string
  _type: 'menu'
  _createdAt: string
  _updatedAt: string
  _rev: string
  pages?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'pageMaker'
  }>
}

export type PageMaker = {
  _id: string
  _type: 'pageMaker'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  sections?: Array<
    | ({
        _key: string
      } & HeroSection)
    | ({
        _key: string
      } & ColumnBlock)
    | ({
        _key: string
      } & StackBlock)
    | ({
        _key: string
      } & LargeTitle)
    | ({
        _key: string
      } & MediumTitle)
    | ({
        _key: string
      } & SmallTitle)
    | ({
        _key: string
      } & StringText)
    | ({
        _key: string
      } & TextInput)
    | ({
        _key: string
      } & Card)
    | ({
        _key: string
      } & Button)
    | ({
        _key: string
      } & Carousel)
    | ({
        _key: string
      } & TextOnPicture)
    | ({
        _key: string
      } & FormButton)
  >
}

export type Formulaires = {
  _id: string
  _type: 'formulaires'
  _createdAt: string
  _updatedAt: string
  _rev: string
  formTitle?: string
  formDesc?: string
  sections?: Array<
    | ({
        _key: string
      } & LargeTitle)
    | ({
        _key: string
      } & MediumTitle)
    | ({
        _key: string
      } & SmallTitle)
    | ({
        _key: string
      } & Button)
    | ({
        _key: string
      } & TextField)
    | ({
        _key: string
      } & CheckboxField)
    | ({
        _key: string
      } & RadioField)
    | ({
        _key: string
      } & DropdownField)
    | ({
        _key: string
      } & DateField)
    | ({
        _key: string
      } & ConditionalField)
  >
  submissions?: Array<{
    submittedAt?: string
    user?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'inscription'
    }
    activity?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'activity'
    }
    selectedDate?: string
    answers?: Array<{
      question?: string
      response?: string
      _type: 'answer'
      _key: string
    }>
    _type: 'submission'
    _key: string
  }>
}

export type FormGarderie = {
  _id: string
  _type: 'formGarderie'
  _createdAt: string
  _updatedAt: string
  _rev: string
  nom?: string
  nomFamille?: string
  refFamille?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'inscription'
  }
  genre_check?: {
    genre?: 'homme' | 'femme' | 'autre'
    other_genre?: string
  }
  date_naissance?: string
  noAssuranceMaladie?: string
  adresse?: string
  ville?: string
  zip_code?: string
  phone?: Array<{
    phone_type?: 'home' | 'cell' | 'work' | 'other'
    phone_no?: string
    _type: 'phone_form'
    _key: string
  }>
  email?: string
  momName?: string
  dadName?: string
  emergencyContact?: Array<{
    nom?: string
    phone?: Array<{
      phone_type?: 'home' | 'cell' | 'work' | 'other'
      phone_no?: string
      _type: 'phone_form'
      _key: string
    }>
    transportCheck?: boolean
    _type: 'contactForm'
    _key: string
  }>
  school?: string
  allergieCheck?: boolean
  allergiesForm?: {
    allergies?: Array<string>
    asthmaCheck?: boolean
    prescription?: string
    hopital?: string
    dossier?: string
    medecin?: string
    phone?: Array<{
      phone_type?: 'home' | 'cell' | 'work' | 'other'
      phone_no?: string
      _type: 'phone_form'
      _key: string
    }>
  }
  healthProblems?: {
    healthCheck?: boolean
    description?: string
  }
  langue?: Array<string>
  hobby?: string
  concerns?: {
    concernsCheck?: boolean
    description?: string
  }
  reasons?: string
  authGroup?: {
    firstAid?: boolean
    photoAuth?: boolean
    sunscreen?: boolean
    chasseMoustique?: boolean
    walk?: boolean
    docFonctionnement?: boolean
  }
}

export type Form612 = {
  _id: string
  _type: 'form6-12'
  _createdAt: string
  _updatedAt: string
  _rev: string
  nom?: string
  nomFamille?: string
  genre_check?: {
    genre?: 'homme' | 'femme' | 'autre'
    other_genre?: string
  }
  date_naissance?: string
  noAssuranceMaladie?: string
  adresse?: string
  ville?: string
  zip_code?: string
  phone?: Array<{
    phone_type?: 'home' | 'cell' | 'work' | 'other'
    phone_no?: string
    _type: 'phone_form'
    _key: string
  }>
  email?: string
  momName?: string
  dadName?: string
  emergencyContact?: Array<{
    nom?: string
    phone?: Array<{
      phone_type?: 'home' | 'cell' | 'work' | 'other'
      phone_no?: string
      _type: 'phone_form'
      _key: string
    }>
    transportCheck?: boolean
    _type: 'contactForm'
    _key: string
  }>
  school?: string
  allergieCheck?: boolean
  healthProblems?: {
    healthCheck?: boolean
    description?: string
  }
  langue?: Array<string>
  hobby?: string
  concerns?: {
    concernsCheck?: boolean
    description?: string
  }
  firstAidSigned?: boolean
  photoAuthSigned?: boolean
}

export type Banner = {
  _id: string
  _type: 'banner'
  _createdAt: string
  _updatedAt: string
  _rev: string
  bannerList?: Array<{
    banner?: string
    textContent?: string
    link?: string
    bannerBgImage?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    }
    bgColor?: Color
    isActive?: boolean
    _type: 'banners'
    _key: string
  }>
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type Activity = {
  _id: string
  _type: 'activity'
  _createdAt: string
  _updatedAt: string
  _rev: string
  nom?: string
  dates?: Array<{
    date?: string
    inscriptionOuverte?: boolean
    openDate?: string
    isVisible?: boolean
    members?: Array<{
      _ref: string
      _type: 'reference'
      _weak?: boolean
      _key: string
      [internalGroqTypeReferenceTo]?: 'inscription'
    }>
    _key: string
  }>
}

export type Inscription = {
  _id: string
  _type: 'inscription'
  _createdAt: string
  _updatedAt: string
  _rev: string
  nom?: string
  nom_famille?: string
  zip_code?: string
  phone?: Array<{
    phone_type?: 'home' | 'cell' | 'work' | 'other'
    phone_no?: string
    _type: 'phone_form'
    _key: string
  }>
  email?: string
  member_check?: boolean
  member_form?: {
    occupation?:
      | 'full_time'
      | 'half-time'
      | 'at_home'
      | 'autonome'
      | 'etudiant'
      | 'retraite'
      | 'no_answer'
    date_naissance?: string
    langue_principale?: string
    langues_secondaires?: Array<string>
    familial_status?: 'celibataire' | 'couple' | 'marie' | 'veuf' | 'conjoint' | 'no_answer'
    scolarity?: 'Primaire' | 'Secondaire' | 'C\xE9gep' | 'DEP' | 'Universit\xE9'
    adhesionTime?: string
    paidTime?: string
    paidMethod?: 'monnaie' | 'credit' | 'debit' | 'free'
    renewTime?: string
    transactionId?: string
    family_members_old?: Array<{
      nom?: string
      nom_famille?: string
      age?: string
      genre_check?: {
        genre?: 'homme' | 'femme' | 'autre' | 'no_answer'
        other_genre?: string
      }
      familyLink?:
        | 'pere'
        | 'mere'
        | 'conjoint'
        | 'grand-pere'
        | 'grand-mere'
        | 'fils'
        | 'fille'
        | 'neveu'
        | 'niece'
        | 'oncle'
        | 'tante'
        | 'no_idea'
        | 'no_answer'
      _type: 'family_member'
      _key: string
    }>
    family_members?: {
      conjoint?: {
        nom?: string
        nom_famille?: string
        age?: string
        phone?: Array<{
          phone_type?: 'home' | 'cell' | 'work' | 'other'
          phone_no?: string
          _type: 'phone_form'
          _key: string
        }>
        genre_check?: {
          genre?: 'homme' | 'femme' | 'autre' | 'no_answer'
          other_genre?: string
        }
        scolarity?: 'Primaire' | 'Secondaire' | 'C\xE9gep' | 'DEP' | 'Universit\xE9'
        occupation?:
          | 'full_time'
          | 'half-time'
          | 'at_home'
          | 'autonome'
          | 'etudiant'
          | 'retraite'
          | 'no_answer'
      }
      childrenUnder18?: Array<{
        nom?: string
        nom_famille?: string
        age?: string
        genre_check?: {
          genre?: 'homme' | 'femme' | 'autre' | 'no_answer'
          other_genre?: string
        }
        familyLink?: 'fils' | 'fille' | 'neveu' | 'niece' | 'no_answer'
        _type: 'children'
        _key: string
      }>
      childrenOver18?: Array<{
        nom?: string
        nom_famille?: string
        age?: string
        genre_check?: {
          genre?: 'homme' | 'femme' | 'autre' | 'no_answer'
          other_genre?: string
        }
        familyLink?: 'fils' | 'fille' | 'neveu' | 'niece' | 'no_answer'
        school?: string
        _type: 'child'
        _key: string
      }>
      handicappedMemberCheck?: boolean
      handicappedMemberSection?: {
        functionnal?: boolean
        handicappedMember?: {
          nom?: string
          nom_famille?: string
          age?: string
          genre_check?: {
            genre?: 'homme' | 'femme' | 'autre' | 'no_answer'
            other_genre?: string
          }
          diagnostic?: string
        }
        helperCheck?: boolean
        helper?: {
          nom?: string
          nom_famille?: string
        }
      }
    }
    immediate_family?: number
    revenus?: '<10k' | '10k-20k' | '20k-30k' | '30k-40k' | '40k-50k' | '>50k' | 'no_answer'
  }
  benevole_check?: boolean
  benevole_form?: {
    actif_check?: boolean
    code_check?: boolean
    domaines?: Array<string>
    disponibilites?: Array<string>
    raison?: string
    heures?: number
    codeEthiqueSigned?: boolean
  }
  employee_check?: boolean
  connaissance?:
    | 'website'
    | 'instagram'
    | 'facebook'
    | 'membre'
    | 'famille'
    | 'event'
    | 'pastMember'
    | 'other'
    | 'nePasRepondre'
  moreInfo?: {
    livingPlace?: {
      habitation?: boolean
      otherPlace?: string
      howLong?: string
    }
    immigration?: boolean
    immigrationSection?: {
      immigrationTime?: string
      immigrationIssuesCheck?: boolean
      immigrationIssues?: string
      immigrationStatus?: string
      demarche?: string
    }
    principalIncome?:
      | 'Emplois'
      | 'Assurance salaire (priv\xE9e)'
      | 'R\xE9gime de retraite'
      | 'Pr\xEAts et bourse'
      | 'Ch\xF4mage'
      | 'CNESST'
      | 'SAAQ'
      | 'Pension de retraite'
      | 'Aide financi\xE8re de dernier recours (aide sociale)'
      | 'Pension de veuve'
      | 'Allocations familiales'
      | 'Pension alimentaire'
      | 'Allocation au logement'
      | 'Autre'
    otherPrincipalIncome?: string
    otherIncomes?: Array<string>
    otherSecondaryIncome?: string
    transport?: Array<string>
    otherTransport?: string
    pastMemberCheck?: boolean
    pastMemberTime?: string
    interestedActivities?: Array<string>
    activitiesComments?: string
    familyDynamics?: string
    demands?: string
    foodHelpReasons?: Array<string>
    foodHelpReasonOther?: string
    SIPPECriterias?: Array<string>
  }
  formSubmissions?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'formulaires'
  }>
  enrolledActivities?: string
  enrolledEvents?: string
  notes?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
}

export type Color = {
  _type: 'color'
  hex?: string
  alpha?: number
  hsl?: HslaColor
  hsv?: HsvaColor
  rgb?: RgbaColor
}

export type RgbaColor = {
  _type: 'rgbaColor'
  r?: number
  g?: number
  b?: number
  a?: number
}

export type HsvaColor = {
  _type: 'hsvaColor'
  h?: number
  s?: number
  v?: number
  a?: number
}

export type HslaColor = {
  _type: 'hslaColor'
  h?: number
  s?: number
  l?: number
  a?: number
}

export type MediaTag = {
  _id: string
  _type: 'media.tag'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: Slug
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | MissionImage
  | AdminTeamMember
  | MeetingNotes
  | TeamMember
  | FormButton
  | ConditionalField
  | DateField
  | RadioField
  | DropdownField
  | TextField
  | CheckboxField
  | Contact
  | TextOnPicture
  | Carousel
  | Button
  | Card
  | StringText
  | TextInput
  | SmallTitle
  | MediumTitle
  | LargeTitle
  | StackBlock
  | ColumnBlock
  | HeroSection
  | ContactForm
  | Menu
  | PageMaker
  | Formulaires
  | FormGarderie
  | Form612
  | Banner
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Activity
  | Inscription
  | Color
  | RgbaColor
  | HsvaColor
  | HslaColor
  | MediaTag
  | Slug
export declare const internalGroqTypeReferenceTo: unique symbol
