import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setColumns } from '../../features/taskSlice';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: white;
  padding: 24px;
  border-radius: 10px;
  width: 600px;
  max-width: 90%;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  margin: 0;
`;

const Close = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const Lists = styled.div`
  display: flex;
  gap: 30px;
`;

const ColumnList = styled.div`
  flex: 1;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DraggableItem = styled.div`
  padding: 8px;
  border: 1px dashed #ccc;
  margin-bottom: 6px;
  background: #fafafa;
  cursor: grab;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 8px 18px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  background: ${(props) => (props.$primary ? '#007bff' : '#eee')};
  color: ${(props) => (props.$primary ? '#fff' : '#333')};
`;

const defaultColumns = [
    'id',
    'name',
    'description',
    'assignee',
    'status',
    'dueDate',
    'estimatedHours',
    'remarks',
];

const displayMap = {
    id: 'ID',
    name: 'Name',
    description: 'Description',
    assignee: 'Assignee',
    status: 'Status',
    dueDate: 'Due date',
    estimatedHours: 'Estimation hours',
    remarks: 'Remarks',
};

const EditColumnsModal = ({ onClose }) => {
    const { columns } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState([...columns.visible]);
    const [order, setOrder] = useState([...columns.order]);

    useEffect(() => {
        const saved = localStorage.getItem('columnConfig');
        if (saved) {
            const parsed = JSON.parse(saved);
            setVisible(parsed.visible);
            setOrder(parsed.order);
        }
    }, []);

    const handleCheckbox = (col) => {
        setVisible((prev) =>
            prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]
        );
    };

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('index', index);
    };

    const handleDrop = (e, index) => {
        const draggedIndex = e.dataTransfer.getData('index');
        const newOrder = [...order];
        const [moved] = newOrder.splice(draggedIndex, 1);
        newOrder.splice(index, 0, moved);
        setOrder(newOrder);
    };

    const saveChanges = () => {
        const filteredOrder = order.filter((col) => visible.includes(col));
        const missingFromOrder = visible.filter((col) => !filteredOrder.includes(col));
        const finalOrder = [...filteredOrder, ...missingFromOrder];
      
        const updated = { visible, order: finalOrder };
        localStorage.setItem('columnConfig', JSON.stringify(updated));
        dispatch(setColumns(updated));
        onClose();
      };
      

    return (
        <Overlay>
            <Modal>
                <Header>
                    <Title>Edit columns</Title>
                    <Close onClick={onClose}>×</Close>
                </Header>

                <Lists>
                    <ColumnList>
                        <strong>Toggle Visibility</strong>
                        {defaultColumns.map((col) => (
                            <Label key={col}>
                                <input
                                    type="checkbox"
                                    checked={visible.includes(col)}
                                    onChange={() => handleCheckbox(col)}
                                />
                                &nbsp; {displayMap[col]}
                            </Label>
                        ))}
                    </ColumnList>

                    <ColumnList>
                        <strong>Reorder Visible Columns</strong>
                        {order
                            .filter((col) => visible.includes(col))
                            .map((col, index) => (
                                <DraggableItem
                                    key={col}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, index)}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={(e) => handleDrop(e, index)}
                                >
                                    {displayMap[col]}
                                </DraggableItem>
                            ))}
                    </ColumnList>
                </Lists>
                <ButtonGroup>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={() => {
                        const defaultConfig = {
                            visible: [...defaultColumns],
                            order: [...defaultColumns]
                        };
                        localStorage.setItem('columnConfig', JSON.stringify(defaultConfig));
                        dispatch(setColumns(defaultConfig));
                        onClose();
                    }}>Reset to Default</Button>
                    <Button primary onClick={saveChanges}>Save</Button>
                </ButtonGroup>
            </Modal>
        </Overlay>
    );
};

export default EditColumnsModal;
