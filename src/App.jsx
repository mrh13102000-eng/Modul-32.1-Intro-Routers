import styled from "@emotion/styled";

const red = "#ff3b30";
const blue = "#3b3bff";

// Style dasar yang dipakai ulang
const Text = styled.p`
  text-align: center;
  font-weight: bold;
`;

// Extend dari Text
const Title = styled(Text)`
  color: ${red};
  font-size: 24px;
`;
const Name = styled(Text)`
  color: ${blue};
  font-size: 14px;
`;

// Tombol dasar
const Button = styled.button`
  padding: 8px 14px;
  border-radius: 6px;
  background: white;
  font-weight: bold;
  cursor: pointer;
`;

// Extend dari Button
const BlueButton = styled(Button)`
  color: ${blue};
  border: 1px solid ${blue};
`;
const RedButton = styled(Button)`
  color: ${red};
  border: 1px solid ${red};
`;

export default function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Title>Selamat datang di pelajaran CSS-in-JS</Title>
      <Name>JayJay</Name>
      <BlueButton>Lanjut Belajar!</BlueButton>{" "}
      <RedButton>Kembali</RedButton>
    </div>
  );
}