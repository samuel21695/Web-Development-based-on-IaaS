var staticObject = {
  name: "static object",
  explain: "미리, 혹은 이미 작성된 객체"
};
console.dir(typeof(staticObject));
console.log(staticObject.name);
console.log(staticObject.explain);
// ******************************************
var dynamicObject = {};
dynamicObject.name = "dynamic object";
dynamicObject.explain = "동적으로 생성된 객체";
console.dir(typeof(dynamicObject));
console.log(dynamicObject.name);
console.log(dynamicObject.explain);

/**
 * 두개의 객체는 같은 역할을 하지만.,
 * '작성시점'에서 결정적인 차이가 있습니다.
 * 미리 작성되는 일은 '미리 정해진 무언가'에 의해 결정되는 것이지만,
 * 사실상 '미리 정해진 무언가'는 '작성시점' 에서 결정됩니다.
 * 
 * 어떤것이 '가장' 적절한지 선별하기 어렵기 떄문에,
 * 디버깅, 타입검사, 테스트 등의 과정을 거쳐서 결정하는 것이 필요합니다.
 */
