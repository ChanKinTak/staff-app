import type { Schema, Struct } from '@strapi/strapi';

export interface RoomTypesRoomTypes extends Struct.ComponentSchema {
  collectionName: 'components_room_types_room_types';
  info: {
    description: '';
    displayName: 'room_types';
  };
  attributes: {
    amenities: Schema.Attribute.JSON;
    available_rooms: Schema.Attribute.Integer;
    bed_type: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    max_occupancy: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
    price: Schema.Attribute.BigInteger;
    size: Schema.Attribute.BigInteger;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'room-types.room-types': RoomTypesRoomTypes;
    }
  }
}
