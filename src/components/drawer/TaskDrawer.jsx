import React from 'react';
import styled from 'styled-components';

const Drawer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 420px;
  height: 100%;
  background: #fff;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  padding: 32px 24px;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
  border-left: 1px solid #e0e0e0;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  color: #666;
`;

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 24px;
  color: #222;
  padding-bottom: 12px;
  border-bottom: 1px solid #ddd;
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
`;

const Label = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
  color: #555;
`;

const Value = styled.div`
  font-size: 15px;
  color: #222;
`;

const CommentList = styled.ul`
  padding-left: 20px;
  margin-top: 10px;
`;

const CommentItem = styled.li`
  font-size: 14px;
  color: #333;
  margin-bottom: 6px;
`;

const TaskDrawer = ({ task, onClose }) => {
  if (!task) return null;

  return (
    <Drawer>
      <CloseBtn onClick={onClose}>×</CloseBtn>
      <Title>{task.name}</Title>

      <Section>
        <Label>Status:</Label>
        <Value>{task.status}</Value>
      </Section>

      <Section>
        <Label>Priority:</Label>
        <Value>{task.priority}</Value>
      </Section>

      <Section>
        <Label>Assignee:</Label>
        <Value>{task.assignee}</Value>
      </Section>

      <Section>
        <Label>Due Date:</Label>
        <Value>{task.dueDate}</Value>
      </Section>

      <Section>
        <Label>Description:</Label>
        <Value>{task.description}</Value>
      </Section>

      <Section>
        <Label>Estimated Hours:</Label>
        <Value>{task.estimatedHours}</Value>
      </Section>

      {task.comments?.length > 0 && (
        <Section>
          <Label>Comments:</Label>
          <CommentList>
            {task.comments.map((c, i) => (
              <CommentItem key={i}> {c}</CommentItem>
            ))}
          </CommentList>
        </Section>
      )}
    </Drawer>
  );
};

export default TaskDrawer;
