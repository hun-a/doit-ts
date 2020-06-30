import {Bird, Fish} from './BirdAndFish'

export const isSwimmable = (o: Bird | Fish): o is Fish => o instanceof Fish