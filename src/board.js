// Board.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSquare, restartGame } from "./actions";
import { calculateWinner, calculateNextValue, calculateStatus } from "./utils";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

function Board() {
  const dispatch = useDispatch();
  const squares = useSelector((state) => state.game.squares);
  const xIsNext = useSelector((state) => state.game.xIsNext);

  const selectSquareHandler = (square) => {
    if (calculateWinner(squares) || squares[square]) {
      return;
    }
    const nextValue = calculateNextValue(squares);
    dispatch(selectSquare(square, nextValue));
  };

  const restartHandler = () => {
    dispatch(restartGame());
  };

  const renderSquare = (i) => {
    return (
      <Button
        className='square'
        size='lg'
        fontSize='3xl'
        onClick={() => selectSquareHandler(i)}
        disabled={squares[i] !== null || calculateWinner(squares)}
        _hover={{ bg: "blue.600" }}
        borderRadius='full'
        borderWidth='2px'
        borderColor='blue.600'
        minHeight='100px'
        width={100}
        fontWeight='bold'
        colorScheme='white'
        bg='gray.800'
      >
        {squares[i]}
      </Button>
    );
  };

  const winner = calculateWinner(squares);
  const status = calculateStatus(
    winner,
    squares,
    calculateNextValue(squares),
    xIsNext
  );

  return (
    <Center height='100vh' bg='gray.900'>
      <VStack spacing={8}>
        <Heading mb={4} textAlign='center' color='white'>
          Tic Tac Toe
        </Heading>
        <Text mb={6} textAlign='center' fontSize='xl' color='whiteAlpha.800'>
          {status}
        </Text>
        <Flex direction='column' alignItems='center'>
          <Box borderWidth='1px' p={4} borderRadius='md' bg='gray.700'>
            <Flex direction='column'>
              <Flex>
                <Box flex='1'>{renderSquare(0)}</Box>
                <Box flex='1'>{renderSquare(1)}</Box>
                <Box flex='1'>{renderSquare(2)}</Box>
              </Flex>
              <Flex>
                <Box flex='1'>{renderSquare(3)}</Box>
                <Box flex='1'>{renderSquare(4)}</Box>
                <Box flex='1'>{renderSquare(5)}</Box>
              </Flex>
              <Flex>
                <Box flex='1'>{renderSquare(6)}</Box>
                <Box flex='1'>{renderSquare(7)}</Box>
                <Box flex='1'>{renderSquare(8)}</Box>
              </Flex>
            </Flex>
          </Box>
          <Button
            mt={6}
            onClick={restartHandler}
            size='md'
            w='100%'
            borderRadius='full'
            bg='blue.500'
            color='white'
            _hover={{ bg: "blue.600" }}
          >
            Restart Game
          </Button>
        </Flex>
      </VStack>
    </Center>
  );
}

export default Board;
