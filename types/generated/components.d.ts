import type { Schema, Struct } from '@strapi/strapi';

export interface HeroImageCollectionHeroImage extends Struct.ComponentSchema {
  collectionName: 'components_hero_image_collection_hero_images';
  info: {
    displayName: 'hero image';
  };
  attributes: {
    description: Schema.Attribute.String;
    headingTitle: Schema.Attribute.String;
    imageDesktop: Schema.Attribute.Media<'images', true>;
    imageMobile: Schema.Attribute.Media<'images', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface HeroImageCollectionHeroImageCollection
  extends Struct.ComponentSchema {
  collectionName: 'components_hero_image_collection_hero_image_collections';
  info: {
    description: '';
    displayName: 'hero image collection';
    icon: 'landscape';
  };
  attributes: {
    bannerCollection: Schema.Attribute.Component<
      'hero-image-collection.hero-image',
      true
    >;
  };
}

export interface LinksLink extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero-image-collection.hero-image': HeroImageCollectionHeroImage;
      'hero-image-collection.hero-image-collection': HeroImageCollectionHeroImageCollection;
      'links.link': LinksLink;
      'seo.seo': SeoSeo;
    }
  }
}
