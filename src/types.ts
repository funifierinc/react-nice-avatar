import * as React from 'react';
import { DefaultOptions } from './utils';

type Style = {
  [key: string]: string | number | boolean
}

export type Sex = 'man' | 'woman'
export type EarSize = 'small' | 'big'
export type HairStyle = 'normal' | 'thick' | 'mohawk' | 'womanLong' | 'womanShort' | 'black' | 'dread' | 'curly'
export type HairStyleMan = 'normal' | 'thick' | 'mohawk' | 'black' | 'dread' | 'curly'
export type HairStyleWoman = 'normal' | 'womanLong' | 'womanShort' | 'black' | 'dread' | 'curly'
export type HatStyle = 'beanie' |'turban' | 'none'
export type EyeStyle = 'circle' | 'oval' | 'smile'
export type GlassesStyle = 'round' | 'square' | 'none'
export type NoseStyle = 'short' | 'long' | 'round'
export type MouthStyle = 'laugh' | 'smile' | 'peace'
export type ShirtStyle = 'hoody' | 'short' | 'polo'
export type EyeBrowStyle = 'up' | 'upWoman'

export interface AvatarConfig {
  sex?: Sex,
  faceColor?: string,
  earSize?: EarSize,
  hairColor?: string,
  hairStyle?: HairStyle,
  hairColorRandom?: boolean,
  hatColor?: string,
  hatStyle?: HatStyle,
  eyeStyle?: EyeStyle,
  glassesStyle?: GlassesStyle,
  noseStyle?: NoseStyle,
  mouthStyle?: MouthStyle,
  shirtStyle?: ShirtStyle,
  shirtColor?: string,
  bgColor?: string,
  isGradient?: boolean
}

export interface AvatarFullConfig extends AvatarConfig {
  eyeBrowStyle?: EyeBrowStyle
}

export interface NiceAvatarProps extends AvatarConfig {
  id?: string,
  className?: string,
  style?: Style,
  shape?: "circle" | "rounded" | "square"
}

export type GenConfigFunc = (config?: AvatarFullConfig | string) => Required<AvatarFullConfig>

export declare const genConfig: GenConfigFunc

export declare const defaultOptions : DefaultOptions

export default class ReactNiceAvatar extends React.Component<NiceAvatarProps> {}
