import { gen12345 } from './yield-star'
for (const value of gen12345()) {
  console.log(value)
}