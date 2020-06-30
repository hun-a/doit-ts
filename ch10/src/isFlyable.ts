import {Bird, Fish} from './BirdAndFish'

export const isFlyable = (o: Bird | Fish): o is Bird => o instanceof Bird