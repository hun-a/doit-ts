import {Fish, Bird} from './BirdAndFish'
import {swimOrFly} from './swimOrFly'

[new Bird, new Fish].forEach(swimOrFly)