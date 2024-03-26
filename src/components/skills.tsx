import styled from 'styled-components';

const SubTitle = styled.h4`
  margin-bottom: 0.5rem;
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .point {
    background: ${({ theme }) => theme.colorSkyBlue};
  }
`;

const Item = styled.li``;

interface ISkillsProps {
  contents: {
    BackEnd: string[];
    FrontEnd: string[];
    Tools: string[];
  };
}

const Skills = ({ contents }: ISkillsProps) => {
  return (
    <SkillsList>
      <div>
        <SubTitle>Front-end:</SubTitle>
        {contents.FrontEnd.map((item: any, index: number) => (
          <Item
            dangerouslySetInnerHTML={{ __html: item }}
            style={{ marginLeft: '1.5rem' }}
            key={index}
          ></Item>
        ))}
      </div>

      <div>
        <SubTitle>Back-end:</SubTitle>

        {contents.BackEnd.map((item: any, index: number) => (
          <Item
            dangerouslySetInnerHTML={{ __html: item }}
            style={{ marginLeft: '1.5rem' }}
            key={index}
          ></Item>
        ))}
      </div>

      <div>
        <SubTitle>Tools:</SubTitle>

        {contents.Tools.map((item: any, index: number) => (
          <Item
            dangerouslySetInnerHTML={{ __html: item }}
            style={{ marginLeft: '1.5rem' }}
            key={index}
          ></Item>
        ))}
      </div>
    </SkillsList>
  );
};

export default Skills;
