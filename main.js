export default function Eul2Quat(angle) {
  // Assuming the angles are in radians.
  const heading = angle[0],
    attitude = angle[1],
    bank = -angle[2];
  const c1 = Math.cos(heading / 2);
  const s1 = Math.sin(heading / 2);
  const c2 = Math.cos(attitude / 2);
  const s2 = Math.sin(attitude / 2);
  const c3 = Math.cos(bank / 2);
  const s3 = Math.sin(bank / 2);
  const c1c2 = c1 * c2;
  const s1s2 = s1 * s2;
  const qw = c1c2 * c3 - s1s2 * s3;
  const qy = s1 * c2 * c3 + c1 * s2 * s3;
  const qz = c1c2 * s3 + s1s2 * c3;
  const qx = c1 * s2 * c3 - s1 * c2 * s3;
  return [qx, qy, -qz, qw];
}
