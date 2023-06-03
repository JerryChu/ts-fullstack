/**
 * 转换为json数据
 * @param raw 原始数据
 * @returns json数据
 */
export function toPlainObject(raw: any) {
  return JSON.parse(JSON.stringify(raw));
}
