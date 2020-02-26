package com.example.tmv.service.util;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

public class MapperUtils {
	private static ModelMapper modelMapper = new ModelMapper();

	/**
	 * Model mapper property setting are specified in the following block. Default property matching strategy is set to Strict see {@link MatchingStrategies} Custom mappings are added using
	 * {@link ModelMapper#addMappings(PropertyMap)}
	 */
	static {
		modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		modelMapper.getConfiguration().setPropertyCondition(Conditions.isNotNull());
	}

	/**
	 * Hide from public usage.
	 */
	private MapperUtils() {
	}

	/**
	 * <p>
	 * Note: outClass object must have default constructor with no arguments
	 * </p>
	 *
	 * @param <D>
	 *            type of result object.
	 * @param <E>
	 *            type of source object to map from.
	 * @param entity
	 *            entity that needs to be mapped.
	 * @param outClass
	 *            class of result object.
	 * @return new object of <code>outClass</code> type.
	 */
	public static <D, E> D toDto(final E entity, Class<D> dtoClass) {
		return modelMapper.map(entity, dtoClass);
	}

	/**
	 * <p>
	 * Note: outClass object must have default constructor with no arguments
	 * </p>
	 *
	 * @param entityList
	 *            list of entities that needs to be mapped
	 * @param dtoClass
	 *            class of result list element
	 * @param <D>
	 *            type of objects in result list
	 * @param <E>
	 *            type of entity in <code>entityList</code>
	 * @return list of mapped object with <code><D></code> type.
	 */
	public static <D, E> List<D> toDto(final Collection<E> entityList, Class<D> dtoClass) {
		return entityList.stream().map(entity -> toDto(entity, dtoClass)).collect(Collectors.toList());
	}

	/**
	 * <p>
	 * Note: outClass object must have default constructor with no arguments
	 * </p>
	 *
	 * @param <E>
	 *            type of result object.
	 * @param <D>
	 *            type of source object to map from.
	 * @param dto
	 *            dto that needs to be mapped.
	 * @param dto
	 *            class of result object.
	 * @return new object of <code>outClass</code> type.
	 */
	public static <E, D> E toEntity(final D dto, Class<E> entityClass) {
		return modelMapper.map(dto, entityClass);
	}

	/**
	 * <p>
	 * Note: outClass object must have default constructor with no arguments
	 * </p>
	 *
	 * @param dtoList
	 *            list of entities that needs to be mapped
	 * @param entityClass
	 *            class of result list element
	 * @param <E>
	 *            type of objects in result list
	 * @param <D>
	 *            type of entity in <code>dtoList</code>
	 * @return list of mapped object with <code><D></code> type.
	 */
	public static <E, D> List<E> toEntity(final Collection<D> dtoList, Class<E> entityClass) {
		return dtoList.stream().map(entity -> toEntity(entity, entityClass)).collect(Collectors.toList());
	}

	/**
	 * Maps {@code source} to {@code destination}.
	 *
	 * @param source
	 *            object to map from
	 * @param destination
	 *            object to map to
	 */
	// public static <S, D> D map(final S source, D destination) {
	// modelMapper.map(source, destination);
	// return destination;
	// }
}
