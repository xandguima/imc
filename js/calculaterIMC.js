export function imc(weight,height){
  const imc=weight/(height*height)
  const imcFix=imc.toFixed(1)
  return imcFix
}